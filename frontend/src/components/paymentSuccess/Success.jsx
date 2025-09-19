// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";
// import logoImg from "../../assets/Logo.png";
// import "./success.css";

// export const Success = () => {
//     const [searchParams] = useSearchParams();
//     const [invoiceData, setInvoiceData] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchSession = async () => {
//             const sessionId = searchParams.get("session_id");
//             if (!sessionId) {
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const res = await fetch(`http://localhost:2209/api/payment/session/${sessionId}`);
//                 const data = await res.json();
//                 console.log("Fetched session data:", data);


//                 if (data.error) throw new Error(data.error);

//                 setInvoiceData(data);
//                 setShowPopup(true);

//                 // generateInvoice(data);
//             } catch (err) {
//                 console.error("Error fetching session:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSession();
//     }, [searchParams]);

//     const generateInvoice = (data) => {
//         if (!data) return;

//         const doc = new jsPDF({ unit: "pt", format: "a4" });
//         const margin = 40;
//         let y = margin;

//         const pageWidth = doc.internal.pageSize.getWidth();

//         if (logoImg) {
//             const img = new Image();
//             img.src = logoImg;
//             img.onload = () => {
//                 const logoWidth = 100;
//                 const logoHeight = 100;
//                 const centerX = pageWidth / 2 - logoWidth / 2;
//                 doc.addImage(img, "PNG", centerX, y, logoWidth, logoHeight);

//                 y += logoHeight + 10;
//                 doc.setFontSize(16);
//                 doc.setFont("helvetica", "bold");
//                 doc.text("Lets Change", pageWidth / 2, y, { align: "center" });

//                 drawInvoiceContent(doc, data, margin, y + 30);
//                 doc.save(`invoice_${Date.now()}.pdf`);
//             };
//         } else {
//             doc.setFontSize(16);
//             doc.setFont("helvetica", "bold");
//             doc.text("Lets Change", pageWidth / 2, y, { align: "center" });
//             drawInvoiceContent(doc, data, margin, y + 30);
//             doc.save(`invoice_${Date.now()}.pdf`);
//         }
//     };

//     const drawInvoiceContent = (doc, data, margin, startY) => {
//         let y = startY;
//         const pageWidth = doc.internal.pageSize.getWidth();

//         doc.setFontSize(26);
//         doc.setFont("helvetica", "bold");
//         y += 60;
//         doc.text("INVOICE", pageWidth / 2, y, { align: "center" });

//         y += 40;

//         doc.setFontSize(11);
//         doc.setFont("helvetica", "normal");
//         doc.text(`Email: support@letschange.com`, margin, y);
//         doc.text(`Phone: +91 9896120216`, margin, y + 15);
//         doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, y + 30);

//         const rightX = pageWidth - margin - 150;
//         doc.text(`Invoice ID: ${Math.floor(Math.random() * 1000000)}`, rightX, y);
//         doc.text(`Customer: ${data.customer_email || "—"}`, rightX, y + 20);

//         y += 70;

//         doc.setFontSize(12);
//         doc.setFont("helvetica", "bold");
//         doc.text("Item", margin, y);
//         doc.text("Qty", 320, y);
//         doc.text("Price", 420, y);
//         doc.text("Total", 500, y);

//         y += 5;
//         doc.setLineWidth(0.8);
//         doc.line(margin, y, pageWidth - margin, y);
//         y += 15;

//         doc.setFont("helvetica", "normal");
//         const item = data.product || "Product";
//         const qty = 1;
//         const price = (data.amount || 0) / 100;
//         const total = qty * price;

//         doc.text(item, margin, y);
//         doc.text(String(qty), 320, y);
//         doc.text(price.toFixed(2), 420, y);
//         doc.text(total.toFixed(2), 500, y);

//         y += 25;

//         doc.setLineWidth(0.8);
//         doc.line(margin, y, pageWidth - margin, y);

//         y += 20;
//         doc.setFont("helvetica", "bold");
//         doc.text("Subtotal:", 420, y);
//         doc.text(total.toFixed(2), 500, y);

//         y += 20;
//         doc.text("Tax (0%):", 420, y);
//         doc.text("0.00", 500, y);

//         y += 20;
//         doc.text("Total:", 420, y);
//         doc.text(total.toFixed(2), 500, y);

//         y += 60;
//         doc.setFontSize(12);
//         doc.setFont("helvetica", "bold");
//         doc.text("Thank you for your purchase!", pageWidth / 2, y, { align: "center" });
//         y += 20;
//         doc.text("If you have any questions, contact support@letschange.com", pageWidth / 2, y, { align: "center" });
//     };

//     return (
//         <div className="success-page">
//             {loading ? (
//                 <div className="success-center">
//                     <div className="loader" />
//                     <p className="muted">Finalizing your payment...</p>
//                 </div>
//             ) : showPopup && invoiceData ? (
//                 <div className="success-center">
//                     <div className="success-card">
//                         <div className="success-header">
//                             <svg className="check-icon" viewBox="0 0 24 24" aria-hidden="true">
//                                 <path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
//                             </svg>
//                             <h2>Payment Successful</h2>
//                         </div>

//                         <div className="success-body">

//                             <div className="info-grid">
//                                 <div>
//                                     <div className="info-label">Product</div>
//                                     <div className="info-value">{invoiceData.product}</div>
//                                 </div>

//                                 <div>
//                                     <div className="info-label">Amount</div>
//                                     <div className="info-value">₹{invoiceData.amount / 100}</div>
//                                 </div>

//                                 <div>
//                                     <div className="info-label">Email</div>
//                                     <div className="info-value">{invoiceData.customer_email || "—"}</div>
//                                 </div>
//                             </div>

//                             <div className="actions">
//                                 <button
//                                     className="btn-primary"
//                                     onClick={() => generateInvoice(invoiceData)}
//                                 >
//                                     Download Invoice
//                                 </button>

//                                 <button
//                                     className="btn-outline"
//                                     onClick={() => navigate("/")}
//                                 >
//                                     Back to Home
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="success-center">
//                     <div className="error-card">
//                         <h3>Payment details not found</h3>
//                         <p className="muted">If this is unexpected, check your email or contact support.</p>
//                         <button className="btn-outline" onClick={() => navigate("/")}>
//                             Back to Home
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };









import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import logoImg from "../../assets/Logo.png";
import "./success.css";

export const Success = () => {
  const [searchParams] = useSearchParams();
  const [invoiceData, setInvoiceData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Normalize items (always return array)
  const normalizeItems = (data) => {
    if (data.items && Array.isArray(data.items)) {
      return data.items.map((item) => ({
        name: item.name || "Product",
        qty: item.qty || 1,
        price: item.price || 0, // already in INR from backend
      }));
    } else {
      return [
        {
          name: data.product || "Product",
          qty: 1,
          price: (data.amount || 0) / 100, // convert paise → INR
        },
      ];
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      const sessionId = searchParams.get("session_id");
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:2209/api/payment/session/${sessionId}`
        );
        const data = await res.json();
        console.log("Fetched session data:", data);

        if (data.error) throw new Error(data.error);

        setInvoiceData(data);
        setShowPopup(true);
        localStorage.removeItem("cart");
      } catch (err) {
        console.error("Error fetching session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [searchParams]);

  // ✅ Invoice generator
  const generateInvoice = (data) => {
    if (!data) return;

    const items = normalizeItems(data);
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    let y = margin;
    const pageWidth = doc.internal.pageSize.getWidth();

    if (logoImg) {
      const img = new Image();
      img.src = logoImg;
      img.onload = () => {
        const logoWidth = 100;
        const logoHeight = 100;
        const centerX = pageWidth / 2 - logoWidth / 2;
        doc.addImage(img, "PNG", centerX, y, logoWidth, logoHeight);

        y += logoHeight + 10;
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Lets Change", pageWidth / 2, y, { align: "center" });

        drawInvoiceContent(doc, items, margin, y + 30, data.customer_email);
        doc.save(`invoice_${Date.now()}.pdf`);
      };
    } else {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Lets Change", pageWidth / 2, y, { align: "center" });
      drawInvoiceContent(doc, items, margin, y + 30, data.customer_email);
      doc.save(`invoice_${Date.now()}.pdf`);
    }
  };

  // ✅ Draw invoice content
  const drawInvoiceContent = (doc, items, margin, startY, customerEmail) => {
    let y = startY;
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    y += 60;
    doc.text("INVOICE", pageWidth / 2, y, { align: "center" });

    y += 40;

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Email: support@letschange.com`, margin, y);
    doc.text(`Phone: +91 9896120216`, margin, y + 15);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, y + 30);

    const rightX = pageWidth - margin - 150;
    doc.text(`Invoice ID: ${Math.floor(Math.random() * 1000000)}`, rightX, y);
    doc.text(`Customer: ${customerEmail || "—"}`, rightX, y + 20);

    y += 70;

    // Table Header
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Item", margin, y);
    doc.text("Qty", 320, y);
    doc.text("Price", 420, y);
    doc.text("Total", 500, y);

    y += 5;
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);
    y += 15;

    doc.setFont("helvetica", "normal");

    // Items
    let subtotal = 0;
    items.forEach((item) => {
      const total = item.qty * item.price;
      subtotal += total;

      doc.text(item.name, margin, y);
      doc.text(String(item.qty), 320, y);
      doc.text(item.price.toFixed(2), 420, y);
      doc.text(total.toFixed(2), 500, y);

      y += 20;
    });

    y += 10;
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);

    y += 20;
    doc.setFont("helvetica", "bold");
    doc.text("Subtotal:", 420, y);
    doc.text(subtotal.toFixed(2), 500, y);

    y += 20;
    doc.text("Tax (0%):", 420, y);
    doc.text("0.00", 500, y);

    y += 20;
    doc.text("Total:", 420, y);
    doc.text(subtotal.toFixed(2), 500, y);

    y += 60;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Thank you for your purchase!", pageWidth / 2, y, {
      align: "center",
    });
    y += 20;
    doc.text(
      "If you have any questions, contact support@letschange.com",
      pageWidth / 2,
      y,
      { align: "center" }
    );
  };

  return (
    <div className="success-page">
      {loading ? (
        <div className="success-center">
          <div className="loader" />
          <p className="muted">Finalizing your payment...</p>
        </div>
      ) : showPopup && invoiceData ? (
        <div className="success-center">
          <div className="success-card">
            <div className="success-header">
              <svg
                className="check-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                />
              </svg>
              <h2>Payment Successful</h2>
            </div>

            <div className="success-body">
              <div className="info-grid">
                {normalizeItems(invoiceData).map((item, idx) => (
                  <div key={idx}>
                    <div className="info-label">Product</div>
                    <div className="info-value">
                      {item.name} (x{item.qty}) - ₹{item.price}
                    </div>
                  </div>
                ))}

                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    {invoiceData.customer_email || "—"}
                  </div>
                </div>
              </div>

              <div className="actions">
                <button
                  className="btn-primary"
                  onClick={() => generateInvoice(invoiceData)}
                >
                  Download Invoice
                </button>

                <button className="btn-outline" onClick={() => navigate("/")}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="success-center">
          <div className="error-card">
            <h3>Payment details not found</h3>
            <p className="muted">
              If this is unexpected, check your email or contact support.
            </p>
            <button className="btn-outline" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};