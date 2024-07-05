import React from 'react'

const BagSummary = () => {
    const BagSummary = {
        totalItem:34,
        totalAmount: 1000,
        totalDiscount: 100,
        finalPayment: 900,
    }
    return (
        <div>
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS {BagSummary.totalItem} Items </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{BagSummary.totalAmount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{BagSummary.totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{BagSummary.finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    )
}

export default BagSummary