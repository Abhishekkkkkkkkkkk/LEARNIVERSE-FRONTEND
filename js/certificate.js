const form = document.getElementById('form');
    const certificate = document.getElementById('certificate');
    const outputName = document.getElementById('outputName');
    const outputCourse = document.getElementById('outputCourse');
    const outputSkills = document.getElementById('outputSkills');
    const outputDate = document.getElementById('outputDate');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentName = document.getElementById('studentName').value;
        const courseName = document.getElementById('courseName').value;
        const skillsLearned = document.getElementById('skillsLearned').value.split(',').map(skill => skill.trim());
        const currentDate = new Date().toDateString();

        outputName.textContent = studentName;
        outputCourse.textContent = courseName;
        outputDate.textContent = currentDate;
        outputSkills.innerHTML = '';
        skillsLearned.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            outputSkills.appendChild(li);
        });

        certificate.style.display = 'block';
    });

    function printCertificate() {
        const printContent = document.getElementById('certificate').innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    }

