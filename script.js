// Define a data structure for jobs and their required skills
const jobRankingData = [
    {
        jobId: 1,
        jobTitle: 'Software Engineer',
        requiredSkills: ['javascript', 'python', 'react', 'node', 'sql']
    },
    {
        jobId: 2,
        jobTitle: 'Data Analyst',
        requiredSkills: ['sql', 'excel', 'data visualisation', 'statistics']
    },
    {
        jobId: 3,
        jobTitle: 'UX Designer',
        requiredSkills: ['ui/ux Design', 'prototyping', 'wireframing', 'adobe', 'sketch']
    },
    {
        jobId: 4,
        jobTitle: 'Test Engineer',
        requiredSkills: ['javaScript', 'python', 'selenium', 'test', 'sql']
    },
    {
        jobId: 5,
        jobTitle: 'Frontend Engineer',
        requiredSkills: ['javaScript', 'html', 'css', 'react', 'sql', 'angular']
    },
    {
        jobId: 6,
        jobTitle: 'Backend Engineer',
        requiredSkills: ['javaScript', 'python', 'node', 'mongodb', 'sql']
    },
];

// Function to rank jobs based on a candidate's skills
function rankJobsForCandidate(candidateSkills) {
    const rankedJobs = [];

    // Calculate a score for each job based on candidate's skills match
    jobRankingData.forEach(job => {
        const matchedSkills = job.requiredSkills.filter(skill =>
            candidateSkills.includes(skill)
        );
        console.log('44',matchedSkills)
        const matchPercentage = (matchedSkills.length / job.requiredSkills.length) * 100;

        // Add job details and match percentage to the ranked list
        rankedJobs.push({
            jobId: job.jobId,
            jobTitle: job.jobTitle,
            matchPercentage: matchPercentage.toFixed(2)
        });
    });

    // Sort jobs based on match percentage (descending order)
    rankedJobs.sort((a, b) => b.matchPercentage - a.matchPercentage);

    return rankedJobs;
}

// Example candidate skills
// const candidateSkills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];


function calculateJobMatches() {
    const skillsInput = document.getElementById('skillsInput');
    const matchingJobs = document.getElementById('matchingJobs');

    console.log('skillsInput', skillsInput)
    console.log('matchingJobs', matchingJobs)
    matchingJobs.innerHTML = ''; // Clear previous job list

    const candidateSkills = skillsInput.value.split(',').map(skill => skill.trim().toLowerCase());
    console.log('candidateSkills', candidateSkills)

    const rankedJobs = rankJobsForCandidate(candidateSkills);
    console.log('rankedJobs', rankedJobs)
    rankedJobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = `${job.jobTitle} - Match Percentage: ${job.matchPercentage}%`;
        matchingJobs.appendChild(li);
    });

    console.log('8444444444444', matchingJobs)
}
