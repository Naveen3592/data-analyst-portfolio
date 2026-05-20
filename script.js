// ================= SMOOTH REVEAL ANIMATION =================

const cards = document.querySelectorAll(
    '.project-card, .timeline-card, .info-card, .skill-box'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = '1';

            card.style.transform =
                'translateY(0)';

        }

    });

});

cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform =
        'translateY(40px)';

    card.style.transition =
        '0.6s ease';

});



// ================= MODAL FUNCTIONS =================

function openModal(type){

    const modal =
        document.getElementById('projectModal');

    const modalBody =
        document.getElementById('modalBody');

    modal.style.display = 'block';



    // ================= PROJECT 1 =================

    if(type === 'project1'){

    modalBody.innerHTML = `

        <!-- ================= DASHBOARD IMAGE ================= -->

        <img src="project_images/Railway Dashboard.png"
            class="modal-image">

        <h2>
            Railway Operations Analytics Dashboard
        </h2>

        <p class="modal-description">

            Interactive Railway Analytics Dashboard
            developed using Power BI to analyze
            railway operations,
            station performance,
            train distribution,
            and operational trends.

        </p>


        <!-- ================= PROJECT OVERVIEW ================= -->

        <div class="modal-section">

            <h3>
                Project Overview
            </h3>

            <p class="modal-description">

                This project focuses on analyzing
                railway operational datasets
                to generate business insights
                related to train operations,
                source stations,
                destination stations,
                weekday vs weekend operations,
                and operational trends.

            </p>

        </div>


        <!-- ================= BUSINESS PROBLEM ================= -->

        <div class="modal-section">

            <h3>
                Business Problem
            </h3>

            <p class="modal-description">

                Railway transportation systems
                generate massive operational data.
                Analyzing this data manually is difficult.

                The objective of this project
                was to build an interactive dashboard
                that helps identify operational trends,
                high-traffic stations,
                scheduling patterns,
                and train distribution insights.

            </p>

        </div>


        <!-- ================= DASHBOARD FEATURES ================= -->

        <div class="modal-section">

            <h3>
                Dashboard Features
            </h3>

            <ul>

                <li>Total Trains KPI</li>

                <li>Top Source Stations Analysis</li>

                <li>Top Destination Stations Analysis</li>

                <li>Weekday vs Weekend Train Operations</li>

                <li>Weekly Train Trend Analysis</li>

                <li>Interactive Station Filters</li>

                <li>Operational Performance Insights</li>

            </ul>

        </div>


        <!-- ================= DATASET INFO ================= -->

        <div class="modal-section">

            <h3>
                Dataset Information
            </h3>

            <div class="modal-tags">

                <span>11,113+ Train Records</span>

                <span>921 Source Stations</span>

                <span>924 Destination Stations</span>

                <span>Weekday & Weekend Data</span>

                <span>Operational Dataset</span>

            </div>

        </div>


        <!-- ================= TOOLS ================= -->

        <div class="modal-section">

            <h3>
                Tools & Technologies
            </h3>

            <div class="modal-tags">

                <span>Power BI</span>

                <span>Python</span>

                <span>Pandas</span>

                <span>SQL</span>

                <span>DAX</span>

                <span>Excel</span>

                <span>Matplotlib</span>

                <span>Seaborn</span>

            </div>

        </div>


        <!-- ================= PROJECT WORKFLOW ================= -->

        <div class="modal-section">

            <h3>
                Project Workflow
            </h3>

            <ul>

                <li>Data Loading & Inspection</li>

                <li>Data Cleaning & Transformation</li>

                <li>Exploratory Data Analysis (EDA)</li>

                <li>Grouping & Aggregation</li>

                <li>Feature Engineering</li>

                <li>Dashboard Development</li>

                <li>Business Insight Generation</li>

            </ul>

        </div>


        <!-- ================= KEY INSIGHTS ================= -->

        <div class="modal-section">

            <h3>
                Key Insights
            </h3>

            <ul>

                <li>

                    Certain stations handle
                    significantly higher train traffic.

                </li>

                <li>

                    Weekend train operations
                    are higher on selected routes.

                </li>

                <li>

                    Several train routes operate
                    almost every day,
                    indicating strong passenger demand.

                </li>

                <li>

                    Weekly trend analysis revealed
                    operational peak patterns.

                </li>

            </ul>

        </div>


        <!-- ================= CHALLENGES ================= -->

        <div class="modal-section">

            <h3>
                Challenges Faced
            </h3>

            <ul>

                <li>Missing values in dataset</li>

                <li>Inconsistent station naming</li>

                <li>Complex route-level aggregation</li>

                <li>Data preprocessing & transformation</li>

            </ul>

        </div>


        <!-- ================= OUTCOME ================= -->

        <div class="modal-section">

            <h3>
                Final Outcome
            </h3>

            <p class="modal-description">

                Successfully developed
                an interactive Railway Analytics Dashboard
                that transformed raw operational data
                into meaningful business insights
                using modern Data Analytics
                and Data Engineering techniques.

            </p>

        </div>


       
    `;
}


    // ================= PROJECT 2 =================

   else if(type === 'project2'){

    modalBody.innerHTML = `

        <!-- ================= DASHBOARD IMAGE ================= -->

        <img src="project_images/sales dashboard.png"
            class="modal-image">

        <h2>
            Sales Management Dashboard
        </h2>

        <p class="modal-description">

            Interactive Power BI dashboard
            developed for analyzing sales performance,
            customer insights,
            profit trends,
            and business KPIs.

        </p>


        <!-- ================= PROJECT OVERVIEW ================= -->

        <div class="modal-section">

            <h3>
                Project Overview
            </h3>

            <p class="modal-description">

                This project focuses on
                business sales analytics
                using real-world datasets
                to monitor revenue,
                customer behavior,
                product performance,
                and profit analysis.

            </p>

        </div>


        <!-- ================= BUSINESS PROBLEM ================= -->

        <div class="modal-section">

            <h3>
                Business Problem
            </h3>

            <p class="modal-description">

                Businesses generate large amounts
                of sales and customer data.
                Without proper analysis,
                identifying profitable products,
                customer trends,
                and regional performance
                becomes difficult.

                The objective of this dashboard
                was to transform raw sales data
                into actionable business insights.

            </p>

        </div>


        <!-- ================= DASHBOARD FEATURES ================= -->

        <div class="modal-section">

            <h3>
                Dashboard Features
            </h3>

            <ul>

                <li>Total Sales KPI</li>

                <li>Total Profit Analysis</li>

                <li>Customer Insights</li>

                <li>Regional Sales Performance</li>

                <li>Monthly Revenue Trends</li>

                <li>Top Products Analysis</li>

                <li>Interactive Filters & Slicers</li>

            </ul>

        </div>


        <!-- ================= DATASET INFO ================= -->

        <div class="modal-section">

            <h3>
                Dataset Information
            </h3>

            <div class="modal-tags">

                <span>Fact Internet Sales</span>

                <span>Customer Dataset</span>

                <span>Product Dataset</span>

                <span>Budget Dataset</span>

                <span>Sales Transactions</span>

            </div>

        </div>


        <!-- ================= TOOLS ================= -->

        <div class="modal-section">

            <h3>
                Tools & Technologies
            </h3>

            <div class="modal-tags">

                <span>Power BI</span>

                <span>SQL</span>

                <span>DAX</span>

                <span>Excel</span>

                <span>Data Modeling</span>

                <span>Power Query</span>

            </div>

        </div>


        <!-- ================= WORKFLOW ================= -->

        <div class="modal-section">

            <h3>
                Project Workflow
            </h3>

            <ul>

                <li>Data Import & Cleaning</li>

                <li>Data Modeling</li>

                <li>Relationship Creation</li>

                <li>DAX Measures Development</li>

                <li>KPI Dashboard Creation</li>

                <li>Interactive Reporting</li>

                <li>Business Insight Analysis</li>

            </ul>

        </div>


        <!-- ================= KEY INSIGHTS ================= -->

        <div class="modal-section">

            <h3>
                Key Insights
            </h3>

            <ul>

                <li>

                    Certain products generated
                    significantly higher revenue.

                </li>

                <li>

                    Regional sales performance
                    varied across customer segments.

                </li>

                <li>

                    Monthly sales trends revealed
                    seasonal business patterns.

                </li>

                <li>

                    KPI analysis improved
                    business reporting visibility.

                </li>

            </ul>

        </div>


        <!-- ================= CHALLENGES ================= -->

        <div class="modal-section">

            <h3>
                Challenges Faced
            </h3>

            <ul>

                <li>Data relationship complexity</li>

                <li>Data cleaning inconsistencies</li>

                <li>DAX calculation optimization</li>

                <li>Dashboard performance tuning</li>

            </ul>

        </div>


        <!-- ================= FINAL OUTCOME ================= -->

        <div class="modal-section">

            <h3>
                Final Outcome
            </h3>

            <p class="modal-description">

                Successfully developed
                a professional Sales Management Dashboard
                that transformed raw business data
                into interactive visual insights
                for smarter business decision making.

            </p>

        </div>


       
    `;
}

   //project3
    else if(type === 'project3'){

    modalBody.innerHTML = `

        <!-- ================= DASHBOARD IMAGE ================= -->

        <img src="project_images/customer behavior dashboard.png"
            class="modal-image">

        <h2>
            Customer Behavior Analytics Dashboard
        </h2>

        <p class="modal-description">

            Interactive customer analytics dashboard
            developed using Power BI,
            Python,
            SQL,
            and Excel
            to analyze customer purchasing behavior,
            subscription trends,
            revenue insights,
            and product performance.

        </p>


        <!-- ================= PROJECT OVERVIEW ================= -->

        <div class="modal-section">

            <h3>
                Project Overview
            </h3>

            <p class="modal-description">

                This project analyzes
                customer shopping behavior
                using transactional business data
                containing 3,900 customer purchases
                across multiple product categories.

                The dashboard helps uncover
                customer trends,
                purchasing patterns,
                revenue contribution,
                and customer engagement insights.

            </p>

        </div>


        <!-- ================= BUSINESS PROBLEM ================= -->

        <div class="modal-section">

            <h3>
                Business Problem
            </h3>

            <p class="modal-description">

                Retail businesses generate massive amounts
                of customer transaction data.
                Without proper analytics,
                understanding customer behavior,
                product demand,
                and subscription trends becomes difficult.

                The objective of this project
                was to leverage customer shopping data
                to improve customer engagement,
                optimize product strategies,
                and support data-driven business decisions.

            </p>

        </div>


        <!-- ================= DASHBOARD FEATURES ================= -->

        <div class="modal-section">

            <h3>
                Dashboard Features
            </h3>

            <ul>

                <li>Customer Subscription Analysis</li>

                <li>Revenue by Product Category</li>

                <li>Sales by Age Group</li>

                <li>Revenue Distribution Analysis</li>

                <li>Average Review Rating KPI</li>

                <li>Customer Segmentation</li>

                <li>Interactive Filters & Slicers</li>

                <li>Shipping Type Analysis</li>

            </ul>

        </div>


        <!-- ================= DATASET INFO ================= -->

        <div class="modal-section">

            <h3>
                Dataset Information
            </h3>

            <div class="modal-tags">

                <span>3,900 Purchase Records</span>

                <span>18 Dataset Columns</span>

                <span>Customer Demographics</span>

                <span>Transaction Dataset</span>

                <span>Behavior Analytics</span>

            </div>

        </div>


        <!-- ================= TOOLS ================= -->

        <div class="modal-section">

            <h3>
                Tools & Technologies
            </h3>

            <div class="modal-tags">

                <span>Power BI</span>

                <span>Python</span>

                <span>Pandas</span>

                <span>SQL</span>

                <span>DAX</span>

                <span>Excel</span>

                <span>PostgreSQL</span>

                <span>Power Query</span>

            </div>

        </div>


        <!-- ================= PROJECT WORKFLOW ================= -->

        <div class="modal-section">

            <h3>
                Project Workflow
            </h3>

            <ul>

                <li>Data Collection & Import</li>

                <li>Data Cleaning & Preprocessing</li>

                <li>Missing Value Handling</li>

                <li>Feature Engineering</li>

                <li>SQL Business Analysis</li>

                <li>Dashboard Development</li>

                <li>Insight Generation</li>

            </ul>

        </div>


        <!-- ================= KEY INSIGHTS ================= -->

        <div class="modal-section">

            <h3>
                Key Insights
            </h3>

            <ul>

                <li>

                    Young adult customers generated
                    the highest revenue contribution.

                </li>

                <li>

                    Express shipping customers
                    showed higher average purchase amounts.

                </li>

                <li>

                    Subscription users demonstrated
                    stronger customer loyalty.

                </li>

                <li>

                    Certain products consistently
                    received higher customer ratings.

                </li>

                <li>

                    Loyal customers contributed
                    significantly to overall revenue.

                </li>

            </ul>

        </div>


        <!-- ================= BUSINESS RECOMMENDATIONS ================= -->

        <div class="modal-section">

            <h3>
                Business Recommendations
            </h3>

            <ul>

                <li>

                    Promote subscription benefits
                    to improve customer retention.

                </li>

                <li>

                    Implement loyalty reward programs
                    for repeat customers.

                </li>

                <li>

                    Focus marketing campaigns
                    on high-revenue customer groups.

                </li>

                <li>

                    Highlight top-rated products
                    in promotional campaigns.

                </li>

            </ul>

        </div>


        <!-- ================= CHALLENGES ================= -->

        <div class="modal-section">

            <h3>
                Challenges Faced
            </h3>

            <ul>

                <li>Handling missing review ratings</li>

                <li>Customer segmentation analysis</li>

                <li>Complex SQL aggregations</li>

                <li>Data preprocessing consistency</li>

            </ul>

        </div>


        <!-- ================= FINAL OUTCOME ================= -->

        <div class="modal-section">

            <h3>
                Final Outcome
            </h3>

            <p class="modal-description">

                Successfully developed
                a professional Customer Behavior Dashboard
                that transformed raw transaction data
                into actionable business insights
                for improving customer engagement,
                retention,
                and strategic decision making.

            </p>

        </div>


    
    `;
}
    else if(type === 'project4'){

modalBody.innerHTML = `

    <!-- ================= DASHBOARD IMAGE ================= -->

    <img src="project_images/chacolate dashboard.png"
    class="modal-image">

    <h2>
        Chocolate Shipment Analytics Dashboard
    </h2>

    <p class="modal-description">

        Interactive Power BI dashboard developed
        to analyze shipment operations,
        sales performance,
        product profitability,
        and business KPIs
        using real-world shipment datasets.

    </p>



    <!-- ================= PROJECT OVERVIEW ================= -->

    <div class="modal-section">

        <h3>
            Project Overview
        </h3>

        <p class="modal-description">

            This project focuses on analyzing
            chocolate shipment data
            containing shipment transactions,
            product information,
            sales performance,
            geo distribution,
            and salesperson analytics.

            The dashboard transforms raw shipment data
            into actionable business insights
            for operational monitoring
            and executive decision making.

        </p>

    </div>



    <!-- ================= BUSINESS PROBLEM ================= -->

    <div class="modal-section">

        <h3>
            Business Problem
        </h3>

        <p class="modal-description">

            Businesses handling large shipment operations
            struggle to track product sales,
            shipment distribution,
            profitability,
            and salesperson performance efficiently.

            The goal of this project
            was to build an interactive analytics dashboard
            that provides complete visibility
            into shipment operations
            and business performance.

        </p>

    </div>



    <!-- ================= DASHBOARD FEATURES ================= -->

    <div class="modal-section">

        <h3>
            Dashboard Features
        </h3>

        <ul>

            <li>Total Amount KPI</li>

            <li>Total Boxes KPI</li>

            <li>Shipment Count Analysis</li>

            <li>Profit & Profit % Analysis</li>

            <li>Top 6 Products Analysis</li>

            <li>Top Salespersons Performance</li>

            <li>Geo Distribution Analysis</li>

            <li>Monthly Sales Trends</li>

            <li>Interactive Date Filters</li>

            <li>Dynamic Product Insights</li>

        </ul>

    </div>



    <!-- ================= DATASET INFORMATION ================= -->

    <div class="modal-section">

        <h3>
            Dataset Information
        </h3>

        <div class="modal-tags">

            <span>25,000+ Shipment Records</span>

            <span>Product Dataset</span>

            <span>Geo Dataset</span>

            <span>Salesperson Dataset</span>

            <span>Calendar Table</span>

            <span>Star Schema Model</span>

        </div>

    </div>



    <!-- ================= DATA MODEL ================= -->

    <div class="modal-section">

        <h3>
            Data Modeling
        </h3>

        <p class="modal-description">

            Implemented a professional
            Star Schema Data Model
            using Fact and Dimension tables.

            Created relationships between:

        </p>

        <ul>

            <li>Shipments Table</li>

            <li>Products Table</li>

            <li>Locations Table</li>

            <li>Salesperson Table</li>

            <li>Calendar Table</li>

        </ul>

    </div>



    <!-- ================= TOOLS ================= -->

    <div class="modal-section">

        <h3>
            Tools & Technologies
        </h3>

        <div class="modal-tags">

            <span>Power BI</span>

            <span>DAX</span>

            <span>Excel</span>

            <span>Power Query</span>

            <span>Data Modeling</span>

            <span>Business Intelligence</span>

        </div>

    </div>



    <!-- ================= DAX MEASURES ================= -->

    <div class="modal-section">

        <h3>
            DAX Measures Created
        </h3>

        <ul>

            <li>Total Amount</li>

            <li>Total Boxes</li>

            <li>Shipment Count</li>

            <li>Total Profit</li>

            <li>Profit Percentage</li>

            <li>Current Year vs Previous Year Analysis</li>

        </ul>

    </div>



    <!-- ================= KEY INSIGHTS ================= -->

    <div class="modal-section">

        <h3>
            Key Insights
        </h3>

        <ul>

            <li>

                Certain products generated
                significantly higher revenue
                and profitability.

            </li>

            <li>

                Geo analysis identified
                high-performing business regions.

            </li>

            <li>

                Shipment trends revealed
                seasonal sales patterns.

            </li>

            <li>

                Top salespersons contributed
                major revenue share.

            </li>

            <li>

                Profit margin analysis
                improved product performance understanding.

            </li>

        </ul>

    </div>



    <!-- ================= CHALLENGES ================= -->

    <div class="modal-section">

        <h3>
            Challenges Faced
        </h3>

        <ul>

            <li>Complex data relationships</li>

            <li>Data cleaning inconsistencies</li>

            <li>DAX calculation optimization</li>

            <li>Interactive filtering logic</li>

            <li>Performance optimization</li>

        </ul>

    </div>



    <!-- ================= FINAL OUTCOME ================= -->

    <div class="modal-section">

        <h3>
            Final Outcome
        </h3>

        <p class="modal-description">

            Successfully developed
            a professional shipment analytics dashboard
            that transformed raw operational data
            into meaningful business insights
            using Power BI,
            DAX,
            and modern Business Intelligence techniques.

        </p>

    </div>



    <!-- ================= BUTTONS ================= -->

    <div class="modal-buttons">

        <a href="reports/chocolate-shipment-report.pdf"
        target="_blank">

            View Report

        </a>

        <a href="https://github.com/"
        target="_blank">

            GitHub

        </a>

    </div>

`;}
     /* =========================
   PROJECT 5
========================= */

else if(type === 'project5'){

    modalBody.innerHTML = `

    <img src="project_images/stock market dashboard.png" class="model-image">

    <h2>
        Live Stock Market Analytics System
    </h2>

    <h3 class="company-name">

        Final Year Major Project

    </h3>

    <p class="internship-duration">

        Machine Learning • Flask • Power BI • Python

    </p>

    <div class="modal-section">

        <h4>
            📌 Project Overview
        </h4>

        <p>

            Developed a scalable stock market analytics
            and prediction platform using
            Machine Learning,
            Flask web development,
            and Power BI dashboards
            for monitoring stock market trends
            and generating predictive analytical insights.

        </p>

    </div>



    <div class="modal-section">

        <h4>
            🎯 Project Objectives
        </h4>

        <ul>

            <li>
                Predict stock market prices using Machine Learning
            </li>

            <li>
                Analyze historical stock market trends
            </li>

            <li>
                Create scalable analytical dashboards
            </li>

            <li>
                Develop real-time visualization system
            </li>

            <li>
                Build secure Flask-based application
            </li>

        </ul>

    </div>



    <div class="modal-section">

        <h4>
            🛠 Technologies Used
        </h4>

        <div class="tech-stack">

            <span>Python</span>

            <span>Flask</span>

            <span>Power BI</span>

            <span>Pandas</span>

            <span>NumPy</span>

            <span>Scikit-Learn</span>

            <span>SQLite</span>

            <span>Machine Learning</span>

        </div>

    </div>



    <div class="modal-section">

        <h4>
            📊 Dataset Details
        </h4>

        <p>

            The dataset contains
            Open Price,
            High Price,
            Low Price,
            Close Price,
            Trading Volume,
            and historical stock market records
            used for prediction,
            analysis,
            and trend visualization.

        </p>

    </div>



    <div class="modal-section">

        <h4>
            ⚙️ Machine Learning Models
        </h4>

        <ul>

            <li>XGBoost</li>

            <li>Decision Tree</li>

            <li>K-Nearest Neighbors (KNN)</li>

            <li>Linear Regression</li>

        </ul>

    </div>



    <div class="modal-section">

        <h4>
            📈 Dashboard Features
        </h4>

        <ul>

            <li>
                Stock trend visualization
            </li>

            <li>
                Real-time prediction analytics
            </li>

            <li>
                Interactive charts and filters
            </li>

            <li>
                Historical stock analysis
            </li>

            <li>
                Market performance monitoring
            </li>

        </ul>

    </div>



    <div class="modal-section">

        <h4>
            🔐 Authentication System
        </h4>

        <p>

            Implemented secure login authentication
            using Flask,
            SQLite database,
            session management,
            and password hashing
            for secure user access control.

        </p>

    </div>



    <div class="modal-section">

        <h4>
            🚀 Project Outcome
        </h4>

        <p>

            Successfully developed an intelligent
            stock market analytics platform
            capable of predictive forecasting,
            dashboard reporting,
            and real-time analytical monitoring
            for better financial decision-making.

        </p>

    </div>

    `;  
}
          /* =========================
   PROJECT 6
========================= */

else if(type === 'project6'){

    modalBody.innerHTML = `

    <img src="project_images/call center dashboard.png" class="model-image">

    <h2>
        Call Center Performance Analytics Dashboard
    </h2>

    <h3 class="company-name">

        Customer Service & Operations Analytics Project

    </h3>

    <p class="internship-duration">

        Excel • Power BI • SQL • Data Visualization

    </p>



    <div class="modal-section">

        <h4>
            📌 Project Overview
        </h4>

        <p>

            Developed a complete call center analytics dashboard
            to analyze customer interactions,
            monitor representative performance,
            track revenue trends,
            measure customer satisfaction ratings,
            and improve operational decision-making
            using interactive visual analytics.

        </p>

    </div>



    <div class="modal-section">

        <h4>
            🎯 Business Problem
        </h4>

        <p>

            Customer support teams struggled to monitor
            agent productivity,
            call performance,
            satisfaction ratings,
            and operational efficiency
            due to scattered reporting systems
            and lack of centralized analytics dashboards.

        </p>

    </div>



    <div class="modal-section">

        <h4>
            📊 Dashboard Features
        </h4>

        <ul>

            <li>
                Monthly and yearly call trend analysis
            </li>

            <li>
                Customer satisfaction rating monitoring
            </li>

            <li>
                Gender-based customer analysis
            </li>

            <li>
                Representative-wise call performance tracking
            </li>

            <li>
                Revenue and purchase amount analysis
            </li>

            <li>
                Call duration and operational metrics
            </li>

            <li>
                Interactive filters and slicers
            </li>

        </ul>

    </div>



    <div class="modal-section">

        <h4>
            📁 Dataset Information
        </h4>

        <p>

            The dataset contains
            customer IDs,
            call records,
            purchase amount,
            call duration,
            customer ratings,
            representative details,
            gender,
            city information,
            and operational call center metrics
            for analytical reporting and dashboard creation.

        </p>

    </div>



    <div class="modal-section">

        <h4>
            🛠 Tools & Technologies
        </h4>

        <div class="tech-stack">

            <span>Excel</span>

            <span>Power BI</span>

            <span>SQL</span>

            <span>Pivot Tables</span>

            <span>Data Cleaning</span>

            <span>Visualization</span>

            <span>Dashboard Design</span>

        </div>

    </div>



    <div class="modal-section">

        <h4>
            📈 Key Insights
        </h4>

        <ul>

            <li>
                Identified peak customer call periods
            </li>

            <li>
                Analyzed customer satisfaction distribution
            </li>

            <li>
                Measured representative-wise sales performance
            </li>

            <li>
                Tracked revenue generation patterns
            </li>

            <li>
                Compared customer demographics and purchase behavior
            </li>

        </ul>

    </div>



    <div class="modal-section">

        <h4>
            ⚙️ Data Processing Workflow
        </h4>

        <ul>

            <li>
                Cleaned raw customer interaction data
            </li>

            <li>
                Created pivot-based analytical summaries
            </li>

            <li>
                Developed KPI cards and dashboards
            </li>

            <li>
                Designed interactive charts and visual reports
            </li>

            <li>
                Built dynamic operational performance analytics
            </li>

        </ul>

    </div>



    <div class="modal-section">

        <h4>
            🚀 Project Outcome
        </h4>

        <p>

            Successfully built an interactive
            call center performance analytics system
            that improved operational monitoring,
            customer satisfaction tracking,
            and representative performance analysis
            through visually driven dashboards and KPI reporting.

        </p>

    </div>

    `;

}
   












    // ================= EXPERIENCE 1 =================

     if(type === 'experience1'){

        modalBody.innerHTML = `

            <img src="certificates/Data analytics intership.jpeg"
                class="modal-image">

            <h2>
                Data Analytics Internship
            </h2>

            <h3 class="company-name">

                Talent Shine India Pvt. Ltd · APSCHE
                (Govt. of Andhra Pradesh)

            </h3>

            <p class="internship-duration">

                July 2025 · 120 Hours · Visakhapatnam

            </p>


            <!-- ================= HIGHLIGHTS ================= -->

            <div class="modal-section">

                <h3>
                    Internship Highlights
                </h3>

                <ul>

                    <li>

                        Worked on real-world datasets
                        to extract meaningful insights
                        for decision-making

                    </li>

                    <li>

                        Performed data cleaning,
                        preprocessing,
                        and exploratory data analysis (EDA)

                    </li>

                    <li>

                        Analyzed business problems
                        using SQL queries and Python

                    </li>

                    <li>

                        Built interactive dashboards
                        and reports using
                        Excel and Power BI

                    </li>

                    <li>

                        Applied statistical techniques
                        to validate insights

                    </li>

                    <li>

                        Executed end-to-end
                        data analytics workflow:

                        data → analysis →
                        visualization → insights

                    </li>

                </ul>

            </div>



            <!-- ================= SKILLS ================= -->

            <div class="modal-section">

                <h3>
                    Skills Gained
                </h3>

                <p class="modal-description">

                    Data Analysis,
                    Advanced Excel,
                    SQL,
                    Python (Pandas, NumPy),
                    EDA,
                    Data Visualization,
                    Business Insights,
                    Problem Solving

                </p>

            </div>



            <!-- ================= TOOLS ================= -->

            <div class="modal-section">

                <h3>
                    Tools & Technologies
                </h3>

                <div class="modal-tags">

                    <span>Excel</span>
                    <span>SQL</span>
                    <span>Python</span>
                    <span>Power BI</span>

                </div>

            </div>



            <!-- ================= OUTCOME ================= -->

            <div class="modal-section">

                <h3>
                    Internship Outcome
                </h3>

                <p class="modal-description">

                    Improved confidence in handling
                    real-time datasets,
                    strengthened business-focused
                    analytics understanding,
                    and developed the ability
                    to present insights clearly
                    using dashboards.

                </p>

            </div>



            <!-- ================= BUTTON ================= -->

            <div class="modal-buttons">

                <a href="certificates/Data analytics intership.jpeg"
                    target="_blank">

                    View Certificate

                </a>

            </div>

        `;
    }



    // ================= EXPERIENCE 2 =================

    else if(type === 'experience2'){

        modalBody.innerHTML = `

             <img src="certificates/saiket systems internship.png"
            class="modal-image">

        <h2>
            Telecom Customer Churn Analysis Internship
        </h2>

        <h3 class="company-name">

            SaiKet Systems

        </h3>

        <p class="internship-duration">

            Power BI • Data Analytics • Business Intelligence

        </p>


        <!-- ================= INTERNSHIP HIGHLIGHTS ================= -->

        <div class="modal-section">

            <h3>
                Internship Highlights
            </h3>

            <p class="modal-description">

                During my internship at SaiKet Systems,
                I worked on a real-world Telecom Customer Churn Analysis project,
                where I analyzed customer behavior and built an interactive
                Power BI dashboard to identify churn patterns and key risk factors
                affecting customer retention.

            </p>

        </div>


        <!-- ================= RESPONSIBILITIES ================= -->

        <div class="modal-section">

            <h3>
                Key Responsibilities & Tasks
            </h3>

            <ul>

                <li>

                    Imported and cleaned customer data
                    using Power Query,
                    handling missing values,
                    incorrect data types,
                    and inconsistencies.

                </li>

                <li>

                    Built KPIs such as
                    Total Customers,
                    Churned Customers,
                    and Churn Rate
                    using DAX measures.

                </li>

                <li>

                    Designed interactive dashboards
                    to visualize customer demographics,
                    tenure distribution,
                    and churn analysis.

                </li>

                <li>

                    Analyzed customer churn
                    based on contract type,
                    payment method,
                    and internet service
                    using stacked bar charts and filters.

                </li>

                <li>

                    Created a structured
                    Power BI report
                    to support customer retention strategies.

                </li>

            </ul>

        </div>


        <!-- ================= TOOLS ================= -->

        <div class="modal-section">

            <h3>
                Tools & Technologies Used
            </h3>

            <div class="modal-tags">

                <span>Power BI</span>
                <span>DAX</span>
                <span>Power Query</span>
                <span>Excel</span>
                <span>CSV Data</span>
                <span>Business Intelligence</span>

            </div>

        </div>


        <!-- ================= OUTCOMES ================= -->

        <div class="modal-section">

            <h3>
                Key Outcomes & Learning
            </h3>

            <ul>

                <li>

                    Identified high-churn customer segments
                    such as month-to-month contract users
                    and electronic check payment users.

                </li>

                <li>

                    Gained hands-on experience in
                    data preprocessing,
                    KPI creation,
                    and business analytics.

                </li>

                <li>

                    Strengthened the ability
                    to convert raw data
                    into actionable business insights
                    using visual storytelling.

                </li>

            </ul>

        </div>


            <!-- ================= BUTTON ================= -->

            <div class="modal-buttons">

                <a href="certificates/saiket systems internship.png"
                    target="_blank">

                    View Certificate

                </a>

            </div>

        `;
    }
        // ================= EXPERIENCE 3 =================

else if(type === 'experience3'){

    modalBody.innerHTML = `

        <img src="assets/certificates/cognifyz-internship.jpg"
            class="modal-image">

        <h2>
            Data Engineering Internship
        </h2>

        <h3 class="company-name">

            Cognifyz IT Solutions Pvt. Ltd.

        </h3>

        <p class="internship-duration">

            Railway Operations Data Analysis & Power BI Dashboard Project

        </p>


        <!-- ================= INTERNSHIP OVERVIEW ================= -->

        <div class="modal-section">

            <h3>
                Internship Overview
            </h3>

            <p class="modal-description">

                Worked on a real-world Railway Operations Analytics project
                involving data preprocessing,
                transformation,
                visualization,
                and business insight generation
                using Python and Power BI.

                Developed interactive executive dashboards
                to analyze train operations,
                operational traffic,
                high-demand railway routes,
                station performance,
                and weekday/weekend operational trends.

            </p>

        </div>


        <!-- ================= RESPONSIBILITIES ================= -->

        <div class="modal-section">

            <h3>
                Key Responsibilities & Tasks
            </h3>

            <ul>

                <li>

                    Performed end-to-end data analysis
                    using Python libraries such as
                    Pandas,
                    Matplotlib,
                    and Seaborn.

                </li>

                <li>

                    Cleaned inconsistent datasets,
                    handled missing values,
                    and standardized railway station information.

                </li>

                <li>

                    Generated operational insights
                    from 11,000+ train records.

                </li>

                <li>

                    Implemented DAX measures
                    and dynamic filtering techniques
                    in Power BI dashboards.

                </li>

                <li>

                    Designed multi-page dashboards
                    including Executive Overview,
                    Route & Station Analysis,
                    and Operational Trends.

                </li>

                <li>

                    Built KPI cards,
                    line charts,
                    treemaps,
                    heatmaps,
                    slicers,
                    and operational visualizations.

                </li>

                <li>

                    Analyzed transportation corridors,
                    operational density,
                    and train distribution patterns.

                </li>

            </ul>

        </div>


        <!-- ================= TECHNOLOGIES ================= -->

        <div class="modal-section">

            <h3>
                Technologies Used
            </h3>

            <div class="modal-tags">

                <span>Python</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>
                <span>Power BI</span>
                <span>DAX</span>
                <span>EDA</span>
                <span>Business Intelligence</span>

            </div>

        </div>


        <!-- ================= FEATURES ================= -->

        <div class="modal-section">

            <h3>
                Key Features Implemented
            </h3>

            <ul>

                <li>Executive KPI Dashboard</li>

                <li>Route & Station Analysis</li>

                <li>Interactive Power BI Slicers</li>

                <li>Weekday vs Weekend Analysis</li>

                <li>Operational Trend Analysis</li>

                <li>Dynamic DAX Measures</li>

                <li>Top Route Identification</li>

                <li>Heatmap & Treemap Visualizations</li>

                <li>Business Insight Reporting</li>

                <li>Interactive Filtering & Drill Analysis</li>

            </ul>

        </div>


        <!-- ================= BUSINESS INSIGHTS ================= -->

        <div class="modal-section">

            <h3>
                Key Business Insights
            </h3>

            <ul>

                <li>

                    Identified high-traffic railway stations
                    and major operational hubs.

                </li>

                <li>

                    Analyzed weekly operational trends
                    and passenger demand patterns.

                </li>

                <li>

                    Detected dominant railway routes
                    contributing significantly
                    to network traffic.

                </li>

                <li>

                    Compared weekday and weekend
                    operational distributions
                    for scheduling optimization.

                </li>

                <li>

                    Built dashboards for operational monitoring
                    and decision support.

                </li>

            </ul>

        </div>


        <!-- ================= PROJECT OUTCOME ================= -->

        <div class="modal-section">

            <h3>
                Project Outcome
            </h3>

            <p class="modal-description">

                Successfully developed a professional
                multi-page Railway Operations Analytics Dashboard
                that simulated a real-world
                business intelligence solution
                for transportation data analysis,
                improving operational visibility,
                analytical reporting,
                and data-driven decision-making capabilities.

            </p>

        </div>


        <!-- ================= BUTTONS ================= -->

        <div class="modal-buttons">

            <a href="assets/certificates/cognifyz-internship.jpg"
                target="_blank">

                View Certificate

            </a>

        </div>

    `;
}
 // ================= EXPERIENCE 4 =================
else if(type === 'experience4'){

    modalBody.innerHTML = `

        <img src="certificates/Data science using python internship.png"
            class="modal-image">

        <h2>
            Data Science Using Python Internship
        </h2>

        <h3 class="company-name">

            Council for Skills and Competencies (CSC India)
            · APSCHE · AICTE

        </h3>

        <p class="internship-duration">

            Dec 2025 - Apr 2026 · Andhra Pradesh

        </p>


        <!-- ================= HIGHLIGHTS ================= -->

        <div class="modal-section">

            <h3>
                Internship Highlights
            </h3>

            <ul>

                <li>

                    Worked on real-world
                    Data Science and Python projects

                </li>

                <li>

                    Learned data preprocessing,
                    feature engineering,
                    and model building techniques

                </li>

                <li>

                    Performed Exploratory Data Analysis (EDA)
                    using Pandas and NumPy

                </li>

                <li>

                    Built analytical solutions
                    using Python programming

                </li>

                <li>

                    Applied statistical concepts
                    and data visualization methods

                </li>

                <li>

                    Improved problem-solving abilities
                    through practical datasets

                </li>

                <li>

                    Understood complete Data Science workflow:

                    data → preprocessing →
                    analysis → visualization → insights

                </li>

            </ul>

        </div>


        <!-- ================= SKILLS ================= -->

        <div class="modal-section">

            <h3>
                Skills Gained
            </h3>

            <p class="modal-description">

                Python Programming,
                Data Science,
                Pandas,
                NumPy,
                Data Analysis,
                EDA,
                Data Cleaning,
                Data Visualization,
                Problem Solving,
                Statistical Analysis

            </p>

        </div>


        <!-- ================= TOOLS ================= -->

        <div class="modal-section">

            <h3>
                Tools & Technologies
            </h3>

            <div class="modal-tags">

                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Jupyter Notebook</span>
                <span>Excel</span>

            </div>

        </div>


        <!-- ================= OUTCOME ================= -->

        <div class="modal-section">

            <h3>
                Internship Outcome
            </h3>

            <p class="modal-description">

                Strengthened practical understanding
                of Data Science concepts,
                improved Python programming skills,
                and gained confidence in handling
                real-world datasets and analytical tasks.

            </p>

        </div>


        <!-- ================= CERTIFICATE BUTTON ================= -->

        <div class="modal-buttons">

            <a href="certificates/Data science using python internship.png"
                target="_blank">

                View Certificate

            </a>

        </div>

    `;
}
}



// ================= CLOSE MODAL =================

function closeModal(){

    document.getElementById('projectModal')
        .style.display = 'none';

}



// ================= CLOSE WHEN CLICK OUTSIDE =================

window.onclick = function(event){

    const modal =
        document.getElementById('projectModal');

    if(event.target == modal){

        modal.style.display = 'none';

    }

}
