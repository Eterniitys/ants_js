import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		urlAPIgenre: "http://localhost:8000/api/genders",
		urlAPIspecies: "http://localhost:8000/api/species",
		connecte: false,
		login: "",
		ants: [
			{
				id: 1,
				name: "Camponotus",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 3,
						children: [
							{
								name: "Fellah",
								id: 10,
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 8
											},
											{
												text: "max :",
												value: 18
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 18
											},
											{
												text: "max :",
												value: 22
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 0
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 1
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Herculeanus",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 6
											},
											{
												text: "max :",
												value: 13
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 15
											},
											{
												text: "max :",
												value: 16
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 0
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 1
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Barbaricus",
								id: 10,
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 9
											},
											{
												text: "max :",
												value: 15
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 16
											},
											{
												text: "max :",
												value: 18
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 0
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 1
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							}
						]
					}
				]
			},
			{
				id: 2,
				name: "Messor",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 5,
						children: [
							{
								name: "Barbarus",
								id: 20,
								qte: 1,
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 3
											},
											{
												text: "max :",
												value: 12
											}
										]
									},
									{
										name: "Taille Reine",
										id: 202,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 14
											},
											{
												text: "max :",
												value: 16
											}
										]
									},
									{
										id: 203,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 204,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 205,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Capitatus",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 4
											},
											{
												text: "max :",
												value: 12
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 13
											},
											{
												text: "max :",
												value: 14
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Minor",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 3
											},
											{
												text: "max :",
												value: 8
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 9
											},
											{
												text: "max :",
												value: 10
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Structor",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 4
											},
											{
												text: "max :",
												value: 11
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 9
											},
											{
												text: "max :",
												value: 11
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Wasmani",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 4
											},
											{
												text: "max :",
												value: 10
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 10
											},
											{
												text: "max :",
												value: 12
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							}
						]
					}
				]
			},
			{
				id: 3,
				name: "Liasus",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 1,
						children: [
							{
								name: "Niger",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 3
											},
											{
												text: "max :",
												value: 5
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 8
											},
											{
												text: "max :",
												value: 10
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 0
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 1
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							}
						]
					}
				]
			},
			{
				id: 4,
				name: "Crematogaster",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 1,
						children: [
							{
								name: "Scutellaris",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 3
											},
											{
												text: "max :",
												value: 5
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 8
											},
											{
												text: "max :",
												value: 10
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 0
									}
								]
							}
						]
					}
				]
			},
			{
				id: 5,
				name: "Aphoenogaster",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 1,
						children: [
							{
								name: "Subteranea",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 8
											},
											{
												text: "max :",
												value: 18
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 18
											},
											{
												text: "max :",
												value: 22
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							}
						]
					}
				]
			},
			{
				id: 6,
				name: "Solenopsis",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 1,
						children: [
							{
								name: "Fugax",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 1
											},
											{
												text: "max :",
												value: 2.5
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 5
											},
											{
												text: "max :",
												value: 7
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 1
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 0
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							}
						]
					}
				]
			},
			{
				id: 7,
				name: "Formica",
				qte: 1,
				children: [
					{
						name: "Espéce",
						qte: 2,
						children: [
							{
								name: "Rufa",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 5
											},
											{
												text: "max :",
												value: 10
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 9
											},
											{
												text: "max :",
												value: 11
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 0
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 1
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							},
							{
								name: "Rufibarbis",
								children: [
									{
										name: "Taille",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 6
											},
											{
												text: "max :",
												value: 7.5
											}
										]
									},
									{
										name: "Taille Reine",
										id: 201,
										qte: 2,
										children: [
											{
												text: "min :",
												value: 10
											},
											{
												text: "max :",
												value: 12
											}
										]
									},
									{
										id: 202,
										text: "Pétiole Double :",
										value: 0
									},
									{
										id: 203,
										text: "Nymphe en cocon :",
										value: 1
									},
									{
										id: 204,
										text:
											"Insertion du pétiole au milieu du gastre :",
										value: 1
									}
								]
							}
						]
					}
				]
			}
		]
	}
});
