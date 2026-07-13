const services = [
  ['ID','Aadhaar Services','Assistance with Aadhaar updates, printouts and related online services.'],
  ['PAN','PAN Card Services','Support for PAN card applications, corrections, linking and status checks.'],
  ['PP','Passport Services','Guidance with online passport applications, appointments and documentation.'],
  ['DL','Driving License','Help with learner and driving licence applications and online services.'],
  ['GO','All Government Forms','Accurate form filling for government schemes, jobs, admissions and examinations.'],
  ['R','Mobile & DTH Recharges','Quick assistance with mobile, DTH and other online recharges.'],
  ['UP','Utility Bill Payment','Convenient payment support for electricity, water, mobile and other bills.'],
  ['DOC','Documentation Services','Scanning, printing, photocopying and digital documentation support.']
];
const grid = document.querySelector('#servicesGrid');
grid.innerHTML = services.map((service, index) => `<article class="service-card reveal"><div class="service-icon">${service[0]}</div><h3>${service[1]}</h3><button class="learn" data-service="${index}">Learn More &rarr;</button></article>`).join('');
const modal = document.querySelector('#serviceModal');
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-service]');
  if (button) { const item = services[button.dataset.service]; document.querySelector('#modalIcon').textContent = item[0]; document.querySelector('#modalTitle').textContent = item[1]; document.querySelector('#modalText').textContent = item[2]; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
  if (event.target.closest('.close-modal') || event.target === modal || event.target.closest('.modal-contact')) closeModal();
});
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); toggle.setAttribute('aria-expanded',open); });
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navLinks.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
