
        let currentMonth = 1;

        function changeMonth(month) {
            const table = document.querySelector('table');
            const tbody = table.querySelector('tbody');
            const date = new Date();
            date.setMonth(month);
            const monthName = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            let dayOfWeek = new Date(year, month, 1).getDay();
            if (dayOfWeek === 0) dayOfWeek = 7; // Sunday is 0, but we want it to be 7
            tbody.innerHTML = ''; // Clear existing table rows
            let row = document.createElement('tr');
            for (let i = 1; i < dayOfWeek; i++) {
                row.appendChild(document.createElement('td'));
            }
            for (let i = 1; i <= daysInMonth; i++) {
                const cell = document.createElement('td');
                cell.textContent = i;
                cell.addEventListener('click', function () { // Add click event listener to each day cell
                    alert(`Thank you for the request! We will update the calendar for you! You chose ${month + 1}/${i}/${year}`); // Show an alert with the date
                });
                row.appendChild(cell);
                if (dayOfWeek === 7) {
                    tbody.appendChild(row);
                    row = document.createElement('tr');
                    dayOfWeek = 1;
                } else {
                    dayOfWeek++;
                }
            }
            if (dayOfWeek !== 1) {
                for (let i = dayOfWeek; i <= 7; i++) {
                    row.appendChild(document.createElement('td'));
                }
                tbody.appendChild(row);
            }
            document.querySelector('h1').textContent = `${monthName} ${year}`;
            currentMonth = month;
        }

        function prevMonth() {
            changeMonth(currentMonth - 1);
        }

        function nextMonth() {
            changeMonth(currentMonth + 1);
        }