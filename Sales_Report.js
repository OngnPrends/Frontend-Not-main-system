<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sale Report</title>
    <style>
 body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .menu {
            background-color: #f2f2f2;
            padding: 20px;
            margin-bottom: 20px;
            text-align:center;
        }
        .menu button {
            display: block;
            margin-bottom: 10px;
        }
        h1 {
            text-align: center;
        }
        .table-container {
            width: 100%;
            display: flex;
            justify-content: space-between; 
        }
        .table-wrapper {
            flex: 1; 
            margin-right: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #000000;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .sales-report-column {
            background-color: rgb(255, 0, 179);
        }
    </style>
</head>
<body>
    <div class="menu">
        <button>Dashboard</button>
        <button>Inventory</button>
        <button>Sales Report</button>
        <button>Alert Management</button>
        <button>Sign Out</button>
    </div>
    <div>
        <h1>Sale Report</h1>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <!-- Updated sample data with randomized dates and times -->
                <tr>
                    <td>2024-04-30</td>
                    <td>07:30 AM</td>
                    <td>Yakult(pack)</td>
                    <td>5</td>
                    <td>₱80.00</td>
                    <td>₱400.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>10:15 AM</td>
                    <td>Piatos (large)</td>
                    <td>3</td>
                    <td>₱35.00</td>
                    <td>₱105.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>02:45 PM</td>
                    <td>Piatos (small)</td>
                    <td>4</td>
                    <td>₱16.00</td>
                    <td>₱64.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>05:30 PM</td>
                    <td>Yakult (per piece)</td>
                    <td>7</td>
                    <td>₱16.00</td>
                    <td>₱112.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>09:00 PM</td>
                    <td>Piatos (small)</td>
                    <td>9</td>
                    <td>₱16.00</td>
                    <td>₱144.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>07:45 AM</td>
                    <td>Marlboro Red (pack)</td>
                    <td>6</td>
                    <td>₱180.00</td>
                    <td>₱1,080.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>11:30 AM</td>
                    <td>Marlboro Red (per piece)</td>
                    <td>2</td>
                    <td>₱16.00</td>
                    <td>₱32.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>03:20 PM</td>
                    <td>Pancit Canton</td>
                    <td>8</td>
                    <td>₱14.00</td>
                    <td>₱112.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>06:45 PM</td>
                    <td>Nesfruta</td>
                    <td>3</td>
                    <td>₱21.00</td>
                    <td>₱63.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>09:30 PM</td>
                    <td>Coke (1.5 L)</td>
                    <td>9</td>
                    <td>₱70.00</td>
                    <td>₱630.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>08:15 AM</td>
                    <td>Chubby (pack)</td>
                    <td>1</td>
                    <td>₱53.00</td>
                    <td>₱53.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>05:50 PM</td>
                    <td>Ligo Sardines</td>
                    <td>7</td>
                    <td>₱27.00</td>
                    <td>₱189.00</td>
                </tr>
                <tr>
                    <td>2024-04-30</td>
                    <td>10:00 PM</td>
                    <td>Pillows</td>
                    <td>5</td>
                    <td>₱11.00</td>
                    <td>₱55.00</td>
                </tr>

                <!-- End of updated sample data -->
            </tbody>
        </table>
    </div>

    <!-- Table for profit calculation for the whole year -->
    <div>
        <h2>Profit for the Whole Year</h2>
        <table>
            <tbody>
                <tr>
                    <td>Total Revenue:</td>
                    <td>₱<span id="totalRevenueYear"></span></td>
                </tr>
                <tr>
                    <td>Total Cost:</td>
                    <td>₱<span id="totalCostYear"></span></td>
                </tr>
                <tr>
                    <td>Profit:</td>
                    <td>₱<span id="profitYear"></span></td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Table for profit calculation for the whole day -->
    <div>
        <h2>Profit for the Whole Day</h2>
        <table>
            <tbody>
                <tr>
                    <td>Total Revenue:</td>
                    <td>₱<span id="totalRevenueDay"></span></td>
                </tr>
                <tr>
                    <td>Total Cost:</td>
                    <td>₱<span id="totalCostDay"></span></td>
                </tr>
                <tr>
                    <td>Profit:</td>
                    <td>₱<span id="profitDay"></span></td>
                </tr>
            </tbody>
        </table>
    </div>

    <script>
        // Sample data for sales (replace this with your actual sales data)
        var salesData = [
            { date: '2024-04-30', time: '07:30 AM', productName: 'Yakult(pack)', quantity: 5, unitPrice: 80.00 },
            { date: '2024-04-30', time: '10:15 AM', productName: 'Piatos (large)', quantity: 3, unitPrice: 35.00 },
            { date: '2024-04-30', time: '02:45 PM', productName: 'Piatos (small)', quantity: 4, unitPrice: 16.00 },
            { date: '2024-04-30', time: '05:30 PM', productName: 'Yakult (per piece)', quantity: 7, unitPrice: 16.00 },
            { date: '2024-04-30', time: '09:00 PM', productName: 'Piatos (small)', quantity: 9, unitPrice: 16.00 },
            { date: '2024-04-30', time: '07:45 AM', productName: 'Marlboro Red (pack)', quantity: 6, unitPrice: 180.00 },
            { date: '2024-04-30', time: '11:30 AM', productName: 'Marlboro Red (per piece)', quantity: 2, unitPrice: 16.00 },
            { date: '2024-04-30', time: '03:20 PM', productName: 'Pancit Canton', quantity: 8, unitPrice: 14.00 },
            { date: '2024-04-30', time: '06:45 PM', productName: 'Nesfruta', quantity: 3, unitPrice: 21.00 },
            { date: '2024-04-30', time: '09:30 PM', productName: 'Coke (1.5 L)', quantity: 9, unitPrice: 70.00 },
            { date: '2024-04-30', time: '08:15 AM', productName: 'Chubby (pack)', quantity: 1, unitPrice: 53.00 },
            { date: '2024-04-30', time: '05:50 PM', productName: 'Ligo Sardines', quantity: 7, unitPrice: 27.00 },
            { date: '2024-04-30', time: '10:00 PM', productName: 'Pillows', quantity: 5, unitPrice: 11.00 }
        ];


        function calculateProfitForYear() {
            var totalRevenue = 0;
            var totalCost = 0;

            salesData.forEach(function(sale) {
                var totalPrice = sale.quantity * sale.unitPrice;
                var profit = totalPrice * 0.20; // 20% profit
                var cost = totalPrice - profit;
                totalRevenue += totalPrice;
                totalCost += cost;
            });

            var profit = totalRevenue - totalCost;
            return { totalRevenue: totalRevenue.toFixed(2), totalCost: totalCost.toFixed(2), profit: profit.toFixed(2) };
        }

        function calculateProfitForDay() {
            var currentDate = new Date().toISOString().slice(0, 10);
            var totalRevenue = 0;
            var totalCost = 0;

            salesData.forEach(function(sale) {
                if (sale.date === currentDate) {
                    var totalPrice = sale.quantity * sale.unitPrice;
                    var profit = totalPrice * 0.20; 
                    var cost = totalPrice - profit;
                    totalRevenue += totalPrice;
                    totalCost += cost;
                }
            });

            var profit = totalRevenue - totalCost;
            return { totalRevenue: totalRevenue.toFixed(2), totalCost: totalCost.toFixed(2), profit: profit.toFixed(2) };
        }


        var profitYear = calculateProfitForYear();
        document.getElementById('totalRevenueYear').innerText = profitYear.totalRevenue;
        document.getElementById('totalCostYear').innerText = profitYear.totalCost;
        document.getElementById('profitYear').innerText = profitYear.profit;


        var profitDay = calculateProfitForDay();
        document.getElementById('totalRevenueDay').innerText = profitDay.totalRevenue;
        document.getElementById('totalCostDay').innerText = profitDay.totalCost;
        document.getElementById('profitDay').innerText = profitDay.profit;
    </script>
</body>
</html>

