import codebytes_hero from '../assets/projects/codebytes/codebytes_hero.png';
import codebytes_login from '../assets/projects/codebytes/codebytes_login.png';
import codebytes_problem from '../assets/projects/codebytes/codebytes_problem.png';
import codebytes_dashboard from '../assets/projects/codebytes/codebytes_dashboard.png';
import nvcomputing_hero from '../assets/projects/nvcomputing/nvcomputing_hero.png';
import carevolution from '../assets/projects/carevolution/carevolution.png';
import gnomon_hero from '../assets/projects/gnomon/gnomon_hero.png';
import gnomon_practice from '../assets/projects/gnomon/gnomon_practice.png';
import gnomon_select from '../assets/projects/gnomon/gnomon_select.png';
import shoehud_action from '../assets/projects/shoehud/shoehud_action.png';
import shoehud_main from '../assets/projects/shoehud/shoehud_main.png';
import shoehud_score from '../assets/projects/shoehud/shoehud_score.png';

export const projects = [
	{
		name: 'CodeBytes',
		description:
			'Competitive coding website with custom problems, authentication, judging system, submissions, and blog.',
		github: 'https://github.com/idke64/codebytes',
		link: 'codebytes.codes',
		images: [codebytes_hero, codebytes_login, codebytes_problem, codebytes_dashboard]
	},
	{
		name: 'NVComputing Website',
		description:
			"Website for Neuqua Valley's computing club containing meeting info and resources.",
		github: 'https://github.com/nvcomputing/nvcomputingsite/',
		link: 'nvcomputing.com',
		images: [nvcomputing_hero]
	},
	{
		name: 'Car Evolution',
		description:
			'Car evolution simulation using genetic algorithms. Includes custom assets and simple camera system.',
		github: 'https://github.com/idke64/car-evolution',
		images: [carevolution]
	},
	{
		name: 'Gnomon Learning',
		description:
			'Website for Gnomon Learning, a tutoring service. Implements authentication and basic CRUD operations.',
		github: 'https://github.com/idke64/gnomon',
		link: 'gnomonlearning.org',
		images: [gnomon_hero, gnomon_practice, gnomon_select]
	},
	{
		name: 'ShoeHUD',
		description:
			'Custom heads-up display for Team Fortress 2. Includes custom assets and ui for a variety of game features.',
		github: 'https://github.com/idke64/shoehud',
		images: [shoehud_main, shoehud_action, shoehud_score]
	}
];
