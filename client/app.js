import { InitiativesComponent } from './components/initiatives.js';
import { MembershipComponent } from './components/membership.js';

// The "Manager" for Kindsouls Website
const App = {
  init: () => {
    console.log('Kindsouls Website Engine Started...');

    // 1. Render Initiatives (The Four Core Pillars)
    const impactContainer = document.getElementById('impact-container');
    if (impactContainer) {
      impactContainer.innerHTML = InitiativesComponent.render();
      // Attach toggle logic after rendering
      App.attachInitiativeListeners();
    }

    // 2. Render Membership Tiers
    const membershipRoot = document.getElementById('membership-root');
    if (membershipRoot) {
      membershipRoot.innerHTML = MembershipComponent.render();
    }

    // 3. Initialize Volunteer Form
    App.handleVolunteerForm();

    // NOTE: AboutComponent rendering removed to prevent duplication
    // and keep your HTML buttons functional.
  },

  attachInitiativeListeners: () => {
    // This handles the "See Our Solution" logic inside the component
    window.toggleImpact = (id) => {
      const item = InitiativesComponent.data.find((i) => i.id === id);
      const card = document.getElementById(`card-${id}`);
      if (!card) return;

      const title = card.querySelector('h3');
      const desc = card.querySelector('.description');
      const btn = card.querySelector('.btn-toggle');

      if (!card.classList.contains('solved')) {
        card.classList.add('solved');
        card.style.borderTopColor = item.color;
        card.style.backgroundColor = '#f8fafd';
        title.innerText = item.solution;
        title.style.color = item.color;
        desc.innerText = item.solutionDetail;
        btn.innerText = 'Back to Challenge';
        btn.style.backgroundColor = '#333';
      } else {
        card.classList.remove('solved');
        card.style.borderTopColor = '#666';
        card.style.backgroundColor = '#fff';
        title.innerText = item.problem;
        title.style.color = '#1A1A1A';
        desc.innerText = item.problemDetail;
        btn.innerText = 'See Our Solution';
        btn.style.backgroundColor = '#FF6B35';
      }
    };
  },

  handleVolunteerForm: () => {
    const form = document.getElementById('volunteerForm');
    const responseMsg = document.getElementById('formResponse');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (responseMsg) {
          responseMsg.style.display = 'block';
          responseMsg.style.backgroundColor = '#d4edda';
          responseMsg.style.color = '#155724';
          responseMsg.innerText =
            'Thank you for your interest! We will contact you within 24-48 hours.';
        }
        form.reset();
      });
    }
  },
};

window.onload = App.init;
