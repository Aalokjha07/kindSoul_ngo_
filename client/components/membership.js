export const MembershipComponent = {
  render: () => {
    const tiers = [
      {
        name: 'Student Member',
        price: '₹99',
        link: 'https://rzp.io/rzp/kwfstudent',
        features: [
          'NGO events & camps',
          'Volunteer opportunities',
          'Digital Certificate',
        ],
        color: '#003366',
      },
      {
        name: 'Annual Member',
        price: '₹99/year',
        link: 'https://pages.razorpay.com/kwfmember',
        features: [
          'Planning committees',
          'Annual impact report',
          'Leadership roles',
        ],
        color: '#FF6B35',
      },
      {
        name: 'Life Member',
        price: '₹2,500',
        link: 'https://rzp.io/rzp/kwflifetime',
        features: [
          'Lifetime recognition',
          'Priority advisory role',
          'Core leadership meets',
        ],
        color: '#D4AF37',
      },
    ];

    return `
            <div class="membership-grid">
                ${tiers
                  .map(
                    (tier) => `
                    <div class="membership-card" style="border-top: 5px solid ${tier.color}">
                        <h3>${tier.name}</h3>
                        <div class="price">${tier.price}</div>
                        <ul>
                            ${tier.features.map((f) => `<li>✓ ${f}</li>`).join('')}
                        </ul>
                        <a href="${tier.link}" target="_blank" class="btn-urgent" style="background-color: ${tier.color}">Join Now</a>
                    </div>
                `,
                  )
                  .join('')}
            </div>
        `;
  },
};
