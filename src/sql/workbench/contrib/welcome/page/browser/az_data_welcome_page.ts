/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { escape } from 'vs/base/common/strings';
import { localize } from 'vs/nls';

export default () => `
<div class="welcomePageContainer">
	<div class="welcomePage">
		<div class="ads_homepage splash">
			<div class="gradient">
				<div class="ads_homepage__section section header hero">
					<div class="row start">
						<div class="header__top_nav">
							<div class="flex">
								<div class="icon"></div>
								<div>
									<h1>Azure Data Studio</h1>
									<div class="flex btn_container">
										<div class="btn btn--primary dropdown" role="navigation">
											<ul>
												<li>
													<a class="dropdown__text" href="#">
														<span>New</span><i class="icon--arrow_down"></i>
													</a>
													<ul class="dropdown">
														<li>
															<a href="command:registeredServers.addConnection">${escape(localize("welcomePage.newConnection",
	"New connection"))}</a>
														</li>
														<li>
															<a href="command:workbench.action.files.newUntitledFile">${escape(localize("welcomePage.newQuery",
		"New query"))}</a>
														</li>
														<li>
															<a href="command:notebook.command.new">${escape(localize("welcomePage.newNotebook",
			"New notebook"))}</a>
														</li>
														<li class="mac-only">
															<a
																href="command:workbench.action.files.openLocalFileFolder">${escape(localize("welcomePage.openFileMac",
				"Open file"))}</a>
														</li>
														<li class="windows-only linux-only">
															<a href="command:workbench.action.files.openFile">${escape(localize("welcomePage.openFileLinuxPC",
					"Open file"))}</a>
														</li>
													</ul>
												</li>
											</ul>
										</div>
										<a class="windows-only linux-only btn btn--standard"
											href="command:workbench.action.files.openFile">
											${escape(localize("welcomePage.openFileLinuxPC", "Open file"))}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row header__bottom_nav__tiles ads_grid sm--cols-2 xl--cols-4">
						<div class="col">
							<a class="header__bottom_nav__tile__link" href="command:registeredServers.addConnection">
								<div class="header__bottom_nav__tile tile tile--connection content">
									<h3>Create a Connection</h3>
									<p>Install extensions to enhance the tool’s capabilities.</p>
									<div class="icon connection"></div>
								</div>
							</a>
						</div>
						<div class="col">
							<a class="header__bottom_nav__tile__link"
								href="command:workbench.action.files.newUntitledFile">
								<div class="header__bottom_nav__tile tile tile--query content">
									<h3>Run a query</h3>
									<p>Access your data in a query editor.</p>
									<div class="icon query"></div>
								</div>
							</a>
						</div>
						<div class="col">
							<a class="header__bottom_nav__tile__link" href="command:notebook.command.new">
								<div class="header__bottom_nav__tile tile tile--notebook content">
									<h3>Create a notebook</h3>
									<p>Start a local computational notebook.</p>
									<div class="icon notebook"></div>
								</div>
							</a>
						</div>
						<div class="col">
							<a class="header__bottom_nav__tile__link" href="command:azdata.resource.deploy">
								<div class="header__bottom_nav__tile tile tile--server content">
									<h3>Deploy a server</h3>
									<p>Install an image of SQL Server to a remote location.</p>
									<div class="icon server"></div>
								</div>
							</a>
						</div>
					</div>
					<p class="showOnStartup"><input type="checkbox" id="showOnStartup" class="checkbox">
						<label class="caption" for="showOnStartup">${escape(localize("welcomePage.showOnStartup", "Show welcome page on startup"))}</label>
					</p>
				</div>
			</div>
			<div class="ads_homepage__section content row ads_grid lg--cols-6 sm--cols-1">
				<div class="col--lg--span-4 col--lg--start_1__span_4 col--sm--start_1__span_1 resources">
					<h2>Resources</h2>
					<div class="tabs">
						<input class="input" name="tabs" type="radio" id="tab-1" checked="checked" />
						<label class="label" for="tab-1">History</label>
						<div class="panel">
							<div class="recent history">
								<div class="flex flex--j_between list__header__container">
									<h4 class="icon--document list__header">Name</h4>
									<h4>Last Opened</h4>
								</div>
								<ul class="list">
									<!-- Filled programmatically -->
									<li class="moreRecent">
										<a href="command:workbench.action.openRecent">${escape(localize("welcomePage.moreRecent", "Show more"))}</a>
										<i class="icon--arrow_down--dark"></i>
									</li>
								</ul>
								<p class="none detail">No recent folders</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col--lg--start_5__span_2 col--sm--start_1__span_1">
					<div class="links">
						<h2>Useful Links</h2>
						<h4>
							<a class="link"
								href="https://aka.ms/azuredatastudio">${escape(localize("welcomePage.gettingStarted",
						"Getting Started"))}<span class="icon--link"</a>
						</h4>
						<p>
						${escape(localize("welcomePage.gettingStartedDesciption",
							"Discover the capabilities offered by Aure Data Studio and learn how to make the most of them."))}
						</p>
						<h4>
							<a class="link"
								href="https://aka.ms/azuredatastudio">${escape(localize("welcomePage.productDocumentation",
								"Documentation"))}<span class="icon--link"</a></a>
						</h4>
						<p>Discover the capabilities offered by Aure Data Studio and learn how to make the most of them.
						</p>
						<div class="videos_container row">
							<div class="videos_container__video">
								<video width="100%" controls="">
									<source src="vid.mp4" type="video/mp4" />
									Your browser does not support HTML5 video.
								</video>
								<h4>Overview of Azure Data Studio</h4>
							</div>
							<div class="videos_container__video">
								<video width="100%" controls="">
									<source src="vid.mp4" type="video/mp4" />
									Your browser does not support HTML5 video.
								</video>
								<h4>Introduction to Azure Data Studio Notebooks | Data Exposed</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ads_homepage__section content extensions">
				<div class="flex flex--j_between">
					<h2>Extend your data studio</h2>
					<a class="link--show_all" href="#">Show All <span class="entity">&rarr;</span></a>
				</div>
				<div class="row ads_grid lg--cols-2 xxl--cols-30">
					<div
						class="ads_grid col--sm--start_1__span_14 row--xxl--start_1__span_4 col--lg--start_1__span_14 lg--cols-2 tile no_hover extension_pack">
						<div class="extension_pack__description">
							<h2 class="extension_pack__header"></h2>
							<p class="extension_pack__body"></p>
						</div>
						<div class="extension_pack__extensions flex flex--d_column flex--j_evenly flex--a_start">
							<div class="extension_pack__extension_list flex flex--d_column flex--j_evenly flex--a_start"></div>
							<div class="flex flex--j_end extension_pack__btn_container flex flex--j_between flex--a_center"">
							<div class=" extensionPack" href="#"></div>
							<a class="a_self--end link--learn_more" href="#">Learn more <span class="entity">&rarr;</span></a>
						</div>
					</div>
				</div>
				<div class="extension_list col col--sm--start_1__span_14 col--xxl--start_16__span_15 row--xxl--start_1__span_4 flex flex--d_column">
					<!-- Dynamically populated -->
				</div>
				<br /><br /><br />
			</div>
		</div>
	</div>
</div>
`;
