// Import necessary modules
// wip

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// MySQL connection configuration
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// Function to fetch sales data from the database and generate a report
export async function generateSalesReport(startDate, endDate) {
    try {
        // Fetch sales data from the database within the specified date range
        const [rows] = await pool.query(`
            SELECT * FROM sales
            WHERE sale_date >= ? AND sale_date <= ?
        `, [startDate, endDate]);

        // Process the fetched data to generate the report
        const report = {
            startDate: startDate,
            endDate: endDate,
            totalSales: rows.length,
            salesAmount: 0,
            productsSold: {},
            dailySalesReport: {},
            salesGraph: []
        };

        // Calculate total sales amount and products sold
        for (const sale of rows) {
            report.salesAmount += sale.amount;
            if (report.productsSold[sale.product_id]) {
                report.productsSold[sale.product_id].quantity++;
                report.productsSold[sale.product_id].totalAmount += sale.amount;
            } else {
                report.productsSold[sale.product_id] = {
                    name: sale.product_name,
                    quantity: 1,
                    totalAmount: sale.amount,
                };
            }

            // Generate daily sales report
            const date = sale.sale_date.toISOString().split('T')[0];
            if (!report.dailySalesReport[date]) {
                report.dailySalesReport[date] = {
                    totalSales: 0,
                    salesAmount: 0,
                    salesCount: 0
                };
            }
            report.dailySalesReport[date].totalSales += sale.amount;
            report.dailySalesReport[date].salesCount++;
        }

        // Generate sales graph
        for (const date in report.dailySalesReport) {
            const sales = report.dailySalesReport[date];
            const salesPercentage = sales.totalSales / (sales.salesCount * 100);
            report.salesGraph.push({ date: date, salesPercentage: salesPercentage });
        }

        return report;
    } catch (error) {
        console.error("Error generating sales report:", error);
        return null;
    }
}
