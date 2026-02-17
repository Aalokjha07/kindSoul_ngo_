export const InitiativesComponent = {
  data: [
    {
      title: 'Education',
      icon: '📚',
      text: 'Lighting the lamp of knowledge through literacy programs.',
    },
    {
      title: 'Health',
      icon: '🏥',
      text: 'Securing the right to life with free medical and dental camps.',
    },
    {
      title: 'Sports',
      icon: '🏆',
      text: 'Building strength and national pride through youth talent nurturing.',
    },
    {
      title: 'Environment',
      icon: '🌱',
      text: 'Protecting the Earth via tree plantation and eco-education.',
    },
  ],
  render: () => {
    return `
            <div class="initiatives-grid">
                ${InitiativesComponent.data
                  .map(
                    (item) => `
                    <div class="initiative-card">
                        <div class="icon">${item.icon}</div>
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    </div>
                `,
                  )
                  .join('')}
            </div>
        `;
  },
};
