


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jsanim/jsAnim.js at master · kevinjdolan/jsanim</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe118-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="1FDD4697:78F5:125FD841:5256A8B3" name="octolytics-dimension-request_id" /><meta content="5599455" name="octolytics-actor-id" /><meta content="harishkm2k" name="octolytics-actor-login" /><meta content="3a3c9046fa5e906591bc3e4f1939b3cd4c111da5248a58b71b170ecae2c8e5da" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="0peBLNaVDzeH12CLAIbCNtK2uh3kPIH0I/VhodINXso=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-da610086a8ece032a05fc6706ebe8776de27cc3f.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d20fd2cce9c0d29564dc2dd07ba7115cf00ea07a.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-3e962e599763b7c5f9668b8c1f3a968b7ebf72e9.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-70ee8f16d71727d95df4113a25fedb1e9ba31fe7.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="020ad5edb62a36dda0ed561858cca042">

        <link data-pjax-transient rel='permalink' href='/kevinjdolan/jsanim/blob/a6fc11a7bb6d561e619a0eccba5ce32671a5d2d2/jsAnim.js'>
  <meta property="og:title" content="jsanim"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/kevinjdolan/jsanim"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jsanim - [unmaintained] Javascript Animation Library"/>

  <meta name="description" content="jsanim - [unmaintained] Javascript Animation Library" />

  <meta content="1731669" name="octolytics-dimension-user_id" /><meta content="kevinjdolan" name="octolytics-dimension-user_login" /><meta content="10059738" name="octolytics-dimension-repository_id" /><meta content="kevinjdolan/jsanim" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="10059738" name="octolytics-dimension-repository_network_root_id" /><meta content="kevinjdolan/jsanim" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/kevinjdolan/jsanim/commits/master.atom" rel="alternate" title="Recent Commits to jsanim:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="harishkm2k"
      data-repo="kevinjdolan/jsanim"
      data-branch="master"
      data-sha="b51583b2f484e15520fe78e922ae37e4d6822c3e"
  >

    <input type="hidden" name="nwo" value="kevinjdolan/jsanim" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/harishkm2k" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/330d66af678206217a98ff4ea8567237?d=https%3A%2F%2Fidenticons.github.com%2Fd8fa1c9bdfc14cea6a7fbae19ba1b830.png&amp;s=140" width="20" /> harishkm2k
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="kevinjdolan/jsanim">This repository</span>
    </li>
    <li>
      <a href="/kevinjdolan/jsanim/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="0peBLNaVDzeH12CLAIbCNtK2uh3kPIH0I/VhodINXso=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="10059738" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/kevinjdolan/jsanim/watchers">
        3
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/kevinjdolan/jsanim/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/kevinjdolan/jsanim/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/kevinjdolan/jsanim/stargazers">11</a>
</div>

  </li>


        <li>
          <a href="/kevinjdolan/jsanim/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/kevinjdolan/jsanim/network" class="social-count">7</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/kevinjdolan" class="url fn" itemprop="url" rel="author"><span itemprop="title">kevinjdolan</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/kevinjdolan/jsanim" class="js-current-repository js-repo-home-link">jsanim</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/kevinjdolan/jsanim" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /kevinjdolan/jsanim">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/kevinjdolan/jsanim/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /kevinjdolan/jsanim/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/kevinjdolan/jsanim/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /kevinjdolan/jsanim/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/kevinjdolan/jsanim/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /kevinjdolan/jsanim/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/kevinjdolan/jsanim/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /kevinjdolan/jsanim/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/kevinjdolan/jsanim/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /kevinjdolan/jsanim/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/kevinjdolan/jsanim/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /kevinjdolan/jsanim/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/kevinjdolan/jsanim.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/kevinjdolan/jsanim.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:kevinjdolan/jsanim.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:kevinjdolan/jsanim.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/kevinjdolan/jsanim" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/kevinjdolan/jsanim" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/kevinjdolan/jsanim" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/kevinjdolan/jsanim/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:02441f43f9e4fc52ff3a351f90548596 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/kevinjdolan/jsanim/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/kevinjdolan/jsanim/blob/master/jsAnim.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/kevinjdolan/jsanim" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jsanim</span></a></span></span><span class="separator"> / </span><strong class="final-path">jsAnim.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jsAnim.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/8dd9421bbd48eb5587a00c328c1ac7d5?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;s=140" width="24" />
      <span class="author"><span rel="author">kevinjdolan</span></span>
      <time class="js-relative-date" datetime="2013-05-14T09:47:36-07:00" title="2013-05-14 09:47:36">May 14, 2013</time>
      <div class="commit-title">
          <a href="/kevinjdolan/jsanim/commit/a6fc11a7bb6d561e619a0eccba5ce32671a5d2d2" class="message" data-pjax="true" title="** initial commit">** initial commit</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
        
      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>1020 lines (861 sloc)</span>
        <span>24.285 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-mac-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/kevinjdolan/jsanim?branch=master&amp;filepath=jsAnim.js"
               title="Open this file in GitHub for Mac">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/kevinjdolan/jsanim/edit/master/jsAnim.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/kevinjdolan/jsanim/raw/master/jsAnim.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/kevinjdolan/jsanim/blame/master/jsAnim.js" class="button minibutton ">Blame</a>
          <a href="/kevinjdolan/jsanim/commits/master/jsAnim.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/kevinjdolan/jsanim/delete/master/jsAnim.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm">	jsAnim: Powerful javascript animation</span></div><div class='line' id='LC3'><span class="cm">	--------------------------------------------</span></div><div class='line' id='LC4'><span class="cm">	Copyright 2009 Kevin Dolan</span></div><div class='line' id='LC5'><span class="cm">	-http://www.thekevindolan.com</span></div><div class='line' id='LC6'><span class="cm">	</span></div><div class='line' id='LC7'><span class="cm">	Code licensed under the MIT license</span></div><div class='line' id='LC8'><span class="cm">	-See license.txt</span></div><div class='line' id='LC9'><span class="cm">	</span></div><div class='line' id='LC10'><span class="cm">	v0.2</span></div><div class='line' id='LC11'><span class="cm">*/</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="c1">//These vars are used to hold all jsAnimManagers</span></div><div class='line' id='LC14'><span class="kd">var</span> <span class="nx">jsAnimManagers</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC15'><span class="kd">var</span> <span class="nx">jsAnimManagerId</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="cm">/*! public, accessible</span></div><div class='line' id='LC18'><span class="cm">	jsAnimManager object constructor</span></div><div class='line' id='LC19'><span class="cm">	Used by end-user to manage jsAnim objects</span></div><div class='line' id='LC20'><span class="cm">	Params:</span></div><div class='line' id='LC21'><span class="cm">		-[timestep] : time between frames, defaults to 40</span></div><div class='line' id='LC22'><span class="cm">*/</span></div><div class='line' id='LC23'><span class="kd">function</span> <span class="nx">jsAnimManager</span><span class="p">(</span><span class="nx">timestep</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>	<span class="nx">jsAnimManagers</span><span class="p">[</span><span class="nx">jsAnimManagerId</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC26'>	<span class="k">this</span><span class="p">.</span><span class="nx">myId</span> <span class="o">=</span> <span class="nx">jsAnimManagerId</span><span class="p">;</span></div><div class='line' id='LC27'>	<span class="nx">jsAnimManagerId</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>	<span class="k">if</span><span class="p">(</span><span class="nx">timestep</span><span class="p">)</span></div><div class='line' id='LC30'>		<span class="k">this</span><span class="p">.</span><span class="nx">timestep</span> <span class="o">=</span> <span class="nx">timestep</span><span class="p">;</span></div><div class='line' id='LC31'>	<span class="k">else</span>	</div><div class='line' id='LC32'>		<span class="k">this</span><span class="p">.</span><span class="nx">timestep</span> <span class="o">=</span> <span class="mi">40</span><span class="p">;</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'>	<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>	<span class="k">this</span><span class="p">.</span><span class="nx">animObjects</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC37'>	<span class="k">this</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>	<span class="c1">//Used internally to process a single frame of all active animations</span></div><div class='line' id='LC40'>	<span class="k">this</span><span class="p">.</span><span class="nx">step</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC41'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">paused</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>			<span class="k">for</span><span class="p">(</span><span class="nx">x</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">animObjects</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>				<span class="k">this</span><span class="p">.</span><span class="nx">animObjects</span><span class="p">[</span><span class="nx">x</span><span class="p">].</span><span class="nx">step</span><span class="p">();</span></div><div class='line' id='LC44'>			<span class="p">}</span></div><div class='line' id='LC45'>			<span class="nx">setTimeout</span><span class="p">(</span><span class="s2">&quot;jsAnimManagers[&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">myId</span><span class="o">+</span><span class="s2">&quot;].step()&quot;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">timestep</span><span class="p">);</span></div><div class='line' id='LC46'>		<span class="p">}</span></div><div class='line' id='LC47'>	<span class="p">};</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="c1">//Used internally to kill a jsAnimObject</span></div><div class='line' id='LC50'>	<span class="k">this</span><span class="p">.</span><span class="nx">kill</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC51'>		<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">animObjects</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span></div><div class='line' id='LC52'>	<span class="p">};</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>	<span class="cm">/*! public</span></div><div class='line' id='LC55'><span class="cm">		Called to create a new animation object</span></div><div class='line' id='LC56'><span class="cm">		Params:</span></div><div class='line' id='LC57'><span class="cm">			-objId : id of object being controlled</span></div><div class='line' id='LC58'><span class="cm">	*/</span></div><div class='line' id='LC59'>	<span class="k">this</span><span class="p">.</span><span class="nx">createAnimObject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">objId</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>		<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">objId</span><span class="p">);</span></div><div class='line' id='LC61'>		<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC62'>		<span class="k">this</span><span class="p">.</span><span class="nx">animObjects</span><span class="p">[</span><span class="nx">id</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">jsAnimObject</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC63'>		<span class="k">this</span><span class="p">.</span><span class="nx">index</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC64'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">animObjects</span><span class="p">[</span><span class="nx">id</span><span class="p">];</span></div><div class='line' id='LC65'>	<span class="p">};</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>	<span class="cm">/*! public</span></div><div class='line' id='LC68'><span class="cm">		Called to pause the animation manager</span></div><div class='line' id='LC69'><span class="cm">	*/</span></div><div class='line' id='LC70'>	<span class="k">this</span><span class="p">.</span><span class="nx">pause</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC71'>		<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC72'>	<span class="p">};</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>	<span class="cm">/*! public</span></div><div class='line' id='LC75'><span class="cm">		Called to unpause the animation manager</span></div><div class='line' id='LC76'><span class="cm">	*/</span></div><div class='line' id='LC77'>	<span class="k">this</span><span class="p">.</span><span class="nx">resume</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC78'>		<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC79'>		<span class="k">this</span><span class="p">.</span><span class="nx">step</span><span class="p">();</span></div><div class='line' id='LC80'>	<span class="p">};</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>	<span class="cm">/*! public</span></div><div class='line' id='LC83'><span class="cm">		Called to set the appropriate style values to allow position to be controlled by jsAnim</span></div><div class='line' id='LC84'><span class="cm">		Params:</span></div><div class='line' id='LC85'><span class="cm">			-objId : id of object to be registered</span></div><div class='line' id='LC86'><span class="cm">			-[fixed] : fixed positioning, false to absolute fixed, defaults to false</span></div><div class='line' id='LC87'><span class="cm">	*/</span></div><div class='line' id='LC88'>	<span class="k">this</span><span class="p">.</span><span class="nx">registerPosition</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">objId</span><span class="p">,</span> <span class="nx">fixed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>		<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">objId</span><span class="p">);</span></div><div class='line' id='LC90'>		<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">;</span></div><div class='line' id='LC91'>		<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">;</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="k">if</span><span class="p">(</span><span class="nx">fixed</span><span class="p">)</span></div><div class='line' id='LC94'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="s2">&quot;fixed&quot;</span><span class="p">;</span></div><div class='line' id='LC95'>		<span class="k">else</span></div><div class='line' id='LC96'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="s2">&quot;absolute&quot;</span><span class="p">;</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="s2">&quot;0px&quot;</span><span class="p">;</span></div><div class='line' id='LC99'>		<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="s2">&quot;50%&quot;</span><span class="p">;</span></div><div class='line' id='LC100'>		<span class="nx">el</span><span class="p">.</span><span class="nx">halfWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC101'>		<span class="nx">el</span><span class="p">.</span><span class="nx">halfHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC102'>		<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span> <span class="o">=</span> <span class="p">(</span><span class="o">-</span><span class="nx">el</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC103'>		<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="p">(</span><span class="o">-</span><span class="nx">el</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>		<span class="nx">el</span><span class="p">.</span><span class="nx">positionRegistered</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>		<span class="cm">/*! public</span></div><div class='line' id='LC108'><span class="cm">			Called to manually set the position of this object</span></div><div class='line' id='LC109'><span class="cm">		*/</span></div><div class='line' id='LC110'>		<span class="nx">el</span><span class="p">.</span><span class="nx">setPosition</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="k">this</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC112'>			<span class="k">this</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="p">(</span><span class="nx">y</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC113'>		<span class="p">};</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>	<span class="p">};</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>	<span class="k">this</span><span class="p">.</span><span class="nx">step</span><span class="p">();</span></div><div class='line' id='LC118'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC119'><span class="p">}</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'><span class="cm">/*! accesible</span></div><div class='line' id='LC122'><span class="cm">	jsAnimObject object constructor</span></div><div class='line' id='LC123'><span class="cm">	Used internally to hold the state of a single animation manager</span></div><div class='line' id='LC124'><span class="cm">	Params:</span></div><div class='line' id='LC125'><span class="cm">		-obj : object being animated</span></div><div class='line' id='LC126'><span class="cm">		</span></div><div class='line' id='LC127'><span class="cm">*/</span></div><div class='line' id='LC128'><span class="kd">function</span> <span class="nx">jsAnimObject</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">manager</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>	<span class="k">this</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC131'>	<span class="k">this</span><span class="p">.</span><span class="nx">obj</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC132'>	<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC133'>	<span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC134'>	<span class="k">this</span><span class="p">.</span><span class="nx">animLoops</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC135'>	<span class="k">this</span><span class="p">.</span><span class="nx">current</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC136'>	<span class="k">this</span><span class="p">.</span><span class="nx">manager</span> <span class="o">=</span> <span class="nx">manager</span><span class="p">;</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>	<span class="k">this</span><span class="p">.</span><span class="nx">step</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC139'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">paused</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>			<span class="c1">//Ugly code to get only the first element in the array</span></div><div class='line' id='LC141'>			<span class="k">for</span><span class="p">(</span><span class="nx">x</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>				<span class="kd">var</span> <span class="nx">finished</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="nx">x</span><span class="p">].</span><span class="nx">step</span><span class="p">();</span></div><div class='line' id='LC143'>				<span class="k">if</span><span class="p">(</span><span class="nx">finished</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>					<span class="k">this</span><span class="p">.</span><span class="nx">animLoops</span><span class="p">[</span><span class="nx">x</span><span class="p">]</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC145'>					<span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="nx">x</span><span class="p">].</span><span class="nx">current</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC146'>					<span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="nx">x</span><span class="p">].</span><span class="nx">onLoop</span><span class="p">();</span></div><div class='line' id='LC147'>				<span class="p">}</span></div><div class='line' id='LC148'>				<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">animLoops</span><span class="p">[</span><span class="nx">x</span><span class="p">]</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>					<span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="nx">x</span><span class="p">].</span><span class="nx">onComplete</span><span class="p">();</span></div><div class='line' id='LC150'>					<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="nx">x</span><span class="p">];</span></div><div class='line' id='LC151'>				<span class="p">}</span></div><div class='line' id='LC152'>				<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC153'>			<span class="p">}</span></div><div class='line' id='LC154'>		<span class="p">}</span></div><div class='line' id='LC155'>	<span class="p">};</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>	<span class="cm">/*! public</span></div><div class='line' id='LC158'><span class="cm">		Called to add an animation to the chain</span></div><div class='line' id='LC159'><span class="cm">		Params:</span></div><div class='line' id='LC160'><span class="cm">			-params : a collection in the containing the following elements</span></div><div class='line' id='LC161'><span class="cm">				- property : the Prop object to animate</span></div><div class='line' id='LC162'><span class="cm">				- [from] : optional from value, if unspecified current value is used</span></div><div class='line' id='LC163'><span class="cm">				- to : the value to animate to</span></div><div class='line' id='LC164'><span class="cm">				- duration : the length of time this animation should take</span></div><div class='line' id='LC165'><span class="cm">				- [ease] : the jsAnimEase object to use, if unspecified linear will be used</span></div><div class='line' id='LC166'><span class="cm">				- [loop] : the number of times to loop the animation, negative values are infinite, if unspecified 1 will be used</span></div><div class='line' id='LC167'><span class="cm">				- [onLoop] : the callback function for loop completion</span></div><div class='line' id='LC168'><span class="cm">				- [onComplete] : the callback function for animation completion</span></div><div class='line' id='LC169'><span class="cm">	*/</span></div><div class='line' id='LC170'>	<span class="k">this</span><span class="p">.</span><span class="nx">add</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>		<span class="kd">var</span> <span class="nx">property</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">property</span><span class="p">;</span></div><div class='line' id='LC173'>		<span class="kd">var</span> <span class="nx">from</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">from</span></div><div class='line' id='LC174'>		<span class="kd">var</span> <span class="nx">to</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">to</span><span class="p">;</span></div><div class='line' id='LC175'>		<span class="kd">var</span> <span class="nx">duration</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC176'>		<span class="k">if</span><span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">ease</span><span class="p">)</span></div><div class='line' id='LC177'>			<span class="kd">var</span> <span class="nx">ease</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">ease</span><span class="p">;</span></div><div class='line' id='LC178'>		<span class="k">else</span></div><div class='line' id='LC179'>			<span class="kd">var</span> <span class="nx">ease</span> <span class="o">=</span> <span class="nx">jsAnimEase</span><span class="p">.</span><span class="nx">linear</span><span class="p">;</span></div><div class='line' id='LC180'>		<span class="k">if</span><span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">loop</span><span class="p">)</span></div><div class='line' id='LC181'>			<span class="kd">var</span> <span class="nx">loop</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">loop</span><span class="p">;</span></div><div class='line' id='LC182'>		<span class="k">else</span></div><div class='line' id='LC183'>			<span class="kd">var</span> <span class="nx">loop</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC184'>		<span class="k">if</span><span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">onLoop</span><span class="p">)</span></div><div class='line' id='LC185'>			<span class="kd">var</span> <span class="nx">onLoop</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">onLoop</span><span class="p">;</span></div><div class='line' id='LC186'>		<span class="k">else</span></div><div class='line' id='LC187'>			<span class="kd">var</span> <span class="nx">onLoop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC188'>		<span class="k">if</span><span class="p">(</span><span class="nx">params</span><span class="p">.</span><span class="nx">onComplete</span><span class="p">)</span></div><div class='line' id='LC189'>			<span class="kd">var</span> <span class="nx">onComplete</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">onComplete</span><span class="p">;</span></div><div class='line' id='LC190'>		<span class="k">else</span></div><div class='line' id='LC191'>			<span class="kd">var</span> <span class="nx">onComplete</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>		<span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">current</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">jsAnimEntry</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">property</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">manager</span><span class="p">.</span><span class="nx">timestep</span><span class="p">,</span> <span class="nx">ease</span><span class="p">,</span> <span class="nx">onLoop</span><span class="p">,</span> <span class="nx">onComplete</span><span class="p">);</span></div><div class='line' id='LC194'>		<span class="k">this</span><span class="p">.</span><span class="nx">animLoops</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">current</span><span class="p">]</span> <span class="o">=</span> <span class="nx">loop</span><span class="p">;</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>		<span class="k">this</span><span class="p">.</span><span class="nx">current</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>	<span class="p">};</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>	<span class="cm">/*! public</span></div><div class='line' id='LC201'><span class="cm">		Called to skip the current animation, can be used to exit an infinite loop</span></div><div class='line' id='LC202'><span class="cm">	*/</span></div><div class='line' id='LC203'>	<span class="k">this</span><span class="p">.</span><span class="nx">skip</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC204'>		<span class="c1">//Ugly code to get only the first element in the array</span></div><div class='line' id='LC205'>		<span class="k">for</span><span class="p">(</span><span class="nx">x</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>			<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">animEntries</span><span class="p">[</span><span class="nx">x</span><span class="p">];</span></div><div class='line' id='LC207'>			<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC208'>		<span class="p">}</span></div><div class='line' id='LC209'>	<span class="p">};</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>	<span class="cm">/*! public</span></div><div class='line' id='LC212'><span class="cm">		Called to pause this animator</span></div><div class='line' id='LC213'><span class="cm">	*/</span></div><div class='line' id='LC214'>	<span class="k">this</span><span class="p">.</span><span class="nx">pause</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC215'>		<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC216'>	<span class="p">};</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>	<span class="cm">/*! public</span></div><div class='line' id='LC219'><span class="cm">		Called to resum this animator</span></div><div class='line' id='LC220'><span class="cm">	*/</span></div><div class='line' id='LC221'>	<span class="k">this</span><span class="p">.</span><span class="nx">resume</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC222'>		<span class="k">this</span><span class="p">.</span><span class="nx">paused</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC223'>	<span class="p">};</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>	<span class="cm">/*! public</span></div><div class='line' id='LC226'><span class="cm">		Called to kill this animator</span></div><div class='line' id='LC227'><span class="cm">	*/</span></div><div class='line' id='LC228'>	<span class="k">this</span><span class="p">.</span><span class="nx">kill</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC229'>		<span class="k">this</span><span class="p">.</span><span class="nx">manager</span><span class="p">.</span><span class="nx">kill</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC230'>	<span class="p">};</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC233'><span class="p">}</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'><span class="cm">/*! public, accesible</span></div><div class='line' id='LC236'><span class="cm">	Pos object constructor</span></div><div class='line' id='LC237'><span class="cm">	Called to store an x and y coordinate representing an object&#39;s center</span></div><div class='line' id='LC238'><span class="cm">		according to the jsAnim coordinate system</span></div><div class='line' id='LC239'><span class="cm">	Params:</span></div><div class='line' id='LC240'><span class="cm">		-x : x coordinate, 0 is center, negative is left, positive is right</span></div><div class='line' id='LC241'><span class="cm">		-y : y coordinate, 0 is top, positive id below</span></div><div class='line' id='LC242'><span class="cm">*/</span></div><div class='line' id='LC243'><span class="kd">function</span> <span class="nx">Pos</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>	<span class="c1">//public</span></div><div class='line' id='LC246'>	<span class="k">this</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>	<span class="c1">//public</span></div><div class='line' id='LC249'>	<span class="k">this</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC252'><span class="p">}</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'><span class="cm">/*! public, accesible</span></div><div class='line' id='LC255'><span class="cm">	Dim object constructor</span></div><div class='line' id='LC256'><span class="cm">	Called to store a width/height dimension</span></div><div class='line' id='LC257'><span class="cm">	Params:</span></div><div class='line' id='LC258'><span class="cm">		-w : width</span></div><div class='line' id='LC259'><span class="cm">		-h : height</span></div><div class='line' id='LC260'><span class="cm">*/</span></div><div class='line' id='LC261'><span class="kd">function</span> <span class="nx">Dim</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>	<span class="c1">//public</span></div><div class='line' id='LC264'>	<span class="k">this</span><span class="p">.</span><span class="nx">w</span> <span class="o">=</span> <span class="nx">w</span><span class="p">;</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>	<span class="c1">//public</span></div><div class='line' id='LC267'>	<span class="k">this</span><span class="p">.</span><span class="nx">h</span> <span class="o">=</span> <span class="nx">h</span><span class="p">;</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC270'><span class="p">}</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'><span class="cm">/*! public, accesible</span></div><div class='line' id='LC273'><span class="cm">	Col object constructor</span></div><div class='line' id='LC274'><span class="cm">	Called to store an RGB color</span></div><div class='line' id='LC275'><span class="cm">	Params:</span></div><div class='line' id='LC276'><span class="cm">		-r : red value (0,255)</span></div><div class='line' id='LC277'><span class="cm">		-g : green value (0,255)</span></div><div class='line' id='LC278'><span class="cm">		-b : blue value (0,255)</span></div><div class='line' id='LC279'><span class="cm">*/</span></div><div class='line' id='LC280'><span class="kd">function</span> <span class="nx">Col</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span> <span class="nx">g</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>	<span class="c1">//public</span></div><div class='line' id='LC283'>	<span class="k">this</span><span class="p">.</span><span class="nx">r</span> <span class="o">=</span> <span class="nx">r</span><span class="p">;</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>	<span class="c1">//public</span></div><div class='line' id='LC286'>	<span class="k">this</span><span class="p">.</span><span class="nx">g</span> <span class="o">=</span> <span class="nx">g</span><span class="p">;</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>	<span class="c1">//public</span></div><div class='line' id='LC289'>	<span class="k">this</span><span class="p">.</span><span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC292'><span class="p">}</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'><span class="cm">/*! </span></div><div class='line' id='LC295'><span class="cm">	jsAnimEntry object constructor</span></div><div class='line' id='LC296'><span class="cm">	Used internally to hold the state of single animation entry</span></div><div class='line' id='LC297'><span class="cm">	Params:</span></div><div class='line' id='LC298'><span class="cm">		-property : jsAnimProp object</span></div><div class='line' id='LC299'><span class="cm">		-from : initial value</span></div><div class='line' id='LC300'><span class="cm">		-to : end value</span></div><div class='line' id='LC301'><span class="cm">		-duration : total time of animation (ms)</span></div><div class='line' id='LC302'><span class="cm">		-ease : jsAnimEase object</span></div><div class='line' id='LC303'><span class="cm">		-timestep : the timestep value of the animation manager</span></div><div class='line' id='LC304'><span class="cm">		-onLoop : called after each loop</span></div><div class='line' id='LC305'><span class="cm">		-onComplete : called after completion</span></div><div class='line' id='LC306'><span class="cm">*/</span></div><div class='line' id='LC307'><span class="kd">function</span> <span class="nx">jsAnimEntry</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">property</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">timestep</span><span class="p">,</span> <span class="nx">ease</span><span class="p">,</span> <span class="nx">onLoop</span><span class="p">,</span> <span class="nx">onComplete</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>	<span class="k">this</span><span class="p">.</span><span class="nx">obj</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC310'>	<span class="k">this</span><span class="p">.</span><span class="nx">property</span> <span class="o">=</span> <span class="nx">property</span><span class="p">;</span></div><div class='line' id='LC311'>	<span class="k">this</span><span class="p">.</span><span class="nx">from</span> <span class="o">=</span> <span class="nx">from</span><span class="p">;</span></div><div class='line' id='LC312'>	<span class="k">this</span><span class="p">.</span><span class="nx">to</span> <span class="o">=</span> <span class="nx">to</span><span class="p">;</span></div><div class='line' id='LC313'>	<span class="k">this</span><span class="p">.</span><span class="nx">duration</span> <span class="o">=</span> <span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC314'>	<span class="k">this</span><span class="p">.</span><span class="nx">timestep</span> <span class="o">=</span> <span class="nx">timestep</span><span class="p">;</span></div><div class='line' id='LC315'>	<span class="k">this</span><span class="p">.</span><span class="nx">ease</span> <span class="o">=</span> <span class="nx">ease</span><span class="p">;</span></div><div class='line' id='LC316'>	<span class="k">this</span><span class="p">.</span><span class="nx">current</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC317'>	<span class="k">this</span><span class="p">.</span><span class="nx">onLoop</span> <span class="o">=</span> <span class="nx">onLoop</span><span class="p">;</span></div><div class='line' id='LC318'>	<span class="k">this</span><span class="p">.</span><span class="nx">onComplete</span> <span class="o">=</span> <span class="nx">onComplete</span><span class="p">;</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>	<span class="cm">/*!</span></div><div class='line' id='LC321'><span class="cm">		Used internally to move the object one step</span></div><div class='line' id='LC322'><span class="cm">		Returns : true if this anim entry has completed, false otherwise</span></div><div class='line' id='LC323'><span class="cm">	*/</span></div><div class='line' id='LC324'>	<span class="k">this</span><span class="p">.</span><span class="nx">step</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC325'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">from</span><span class="p">)</span></div><div class='line' id='LC326'>			<span class="k">this</span><span class="p">.</span><span class="nx">from</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">property</span><span class="p">.</span><span class="nx">current</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>		<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">current</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">duration</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>			<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ease</span><span class="p">.</span><span class="nx">transform</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC330'>			<span class="k">this</span><span class="p">.</span><span class="nx">property</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">obj</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">from</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">to</span><span class="p">,</span> <span class="nx">p</span><span class="p">);</span></div><div class='line' id='LC331'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC332'>		<span class="p">}</span></div><div class='line' id='LC333'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC334'>			<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">current</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC335'>			<span class="kd">var</span> <span class="nx">p</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ease</span><span class="p">.</span><span class="nx">transform</span><span class="p">(</span><span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC336'>			<span class="k">this</span><span class="p">.</span><span class="nx">property</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">obj</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">from</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">to</span><span class="p">,</span> <span class="nx">p</span><span class="p">);</span></div><div class='line' id='LC337'>			<span class="k">this</span><span class="p">.</span><span class="nx">current</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">timestep</span><span class="p">;</span></div><div class='line' id='LC338'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC339'>		<span class="p">}</span></div><div class='line' id='LC340'>	<span class="p">};</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC343'><span class="p">}</span></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'><span class="cm">/*! public</span></div><div class='line' id='LC346'><span class="cm">	jsAnimEase objects</span></div><div class='line' id='LC347'><span class="cm">	Used to control easing</span></div><div class='line' id='LC348'><span class="cm">	Methods:</span></div><div class='line' id='LC349'><span class="cm">		transform : Transform a number 0-1 representing a time proportion</span></div><div class='line' id='LC350'><span class="cm">			to a new number 0-1 representing a progress proportion </span></div><div class='line' id='LC351'><span class="cm">*/</span></div><div class='line' id='LC352'><span class="kd">var</span> <span class="nx">jsAnimEase</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC353'><br/></div><div class='line' id='LC354'>	<span class="cm">/*!public</span></div><div class='line' id='LC355'><span class="cm">		Constant Rate</span></div><div class='line' id='LC356'><span class="cm">	*/</span></div><div class='line' id='LC357'>	<span class="nx">linear</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC358'>		<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC359'>			<span class="k">return</span> <span class="nx">t</span><span class="p">;</span></div><div class='line' id='LC360'>		<span class="p">}</span></div><div class='line' id='LC361'>	<span class="p">},</span></div><div class='line' id='LC362'><br/></div><div class='line' id='LC363'>	<span class="cm">/*!public</span></div><div class='line' id='LC364'><span class="cm">		Starts slow, then speeds up</span></div><div class='line' id='LC365'><span class="cm">	*/</span></div><div class='line' id='LC366'>	<span class="nx">parabolicPos</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC367'>		<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>			<span class="k">return</span> <span class="nx">t</span> <span class="o">*</span> <span class="nx">t</span><span class="p">;</span></div><div class='line' id='LC369'>		<span class="p">}</span></div><div class='line' id='LC370'>	<span class="p">},</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>	<span class="cm">/*!public</span></div><div class='line' id='LC373'><span class="cm">		Starts fast, then slows down</span></div><div class='line' id='LC374'><span class="cm">	*/</span></div><div class='line' id='LC375'>	<span class="nx">parabolicNeg</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC376'>		<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC377'>			<span class="k">return</span> <span class="mi">1</span> <span class="o">-</span> <span class="p">(</span><span class="nx">t</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="p">(</span><span class="nx">t</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC378'>		<span class="p">}</span></div><div class='line' id='LC379'>	<span class="p">},</span></div><div class='line' id='LC380'><br/></div><div class='line' id='LC381'>	<span class="cm">/*!public</span></div><div class='line' id='LC382'><span class="cm">		Overshoots target then returns to target</span></div><div class='line' id='LC383'><span class="cm">		Params:</span></div><div class='line' id='LC384'><span class="cm">			-g : overshoot amount [0-1]</span></div><div class='line' id='LC385'><span class="cm">	*/</span></div><div class='line' id='LC386'>	<span class="nx">backout</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC388'>			<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC389'>				<span class="k">return</span> <span class="p">(</span><span class="o">-</span><span class="mi">1</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="p">(</span><span class="nx">t</span> <span class="o">+</span> <span class="nx">g</span> <span class="o">-</span> <span class="mi">2</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">g</span><span class="p">);</span></div><div class='line' id='LC390'>			<span class="p">}</span></div><div class='line' id='LC391'>		<span class="p">};</span></div><div class='line' id='LC392'>	<span class="p">},</span></div><div class='line' id='LC393'><br/></div><div class='line' id='LC394'>	<span class="cm">/*!public</span></div><div class='line' id='LC395'><span class="cm">		Backs up a bit then moves to target</span></div><div class='line' id='LC396'><span class="cm">		Params:</span></div><div class='line' id='LC397'><span class="cm">			-g : backup amount [0-1]</span></div><div class='line' id='LC398'><span class="cm">	*/</span></div><div class='line' id='LC399'>	<span class="nx">backin</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">g</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC400'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC401'>			<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>				<span class="k">return</span> <span class="mi">1</span> <span class="o">+</span> <span class="p">((</span><span class="nx">t</span><span class="o">+</span><span class="mi">1</span><span class="o">-</span><span class="nx">g</span><span class="p">)</span> <span class="o">*</span> <span class="p">((</span><span class="nx">t</span><span class="o">+</span><span class="mi">1</span><span class="o">-</span><span class="nx">g</span><span class="p">)</span> <span class="o">+</span> <span class="nx">g</span> <span class="o">-</span> <span class="mi">2</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">1</span> <span class="o">-</span> <span class="nx">g</span><span class="p">);</span></div><div class='line' id='LC403'>			<span class="p">}</span></div><div class='line' id='LC404'>		<span class="p">};</span></div><div class='line' id='LC405'>	<span class="p">},</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'>	<span class="cm">/*!public</span></div><div class='line' id='LC408'><span class="cm">		Goes to target and then back at constant rate</span></div><div class='line' id='LC409'><span class="cm">	*/</span></div><div class='line' id='LC410'>	<span class="nx">bounceLinear</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC411'>		<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC412'>			<span class="k">if</span><span class="p">(</span><span class="nx">t</span> <span class="o">&lt;</span> <span class="mf">0.5</span><span class="p">)</span></div><div class='line' id='LC413'>				<span class="k">return</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">t</span><span class="p">;</span></div><div class='line' id='LC414'>			<span class="k">else</span></div><div class='line' id='LC415'>				<span class="k">return</span> <span class="mi">1</span> <span class="o">-</span> <span class="mi">2</span> <span class="o">*</span> <span class="p">(</span><span class="nx">t</span> <span class="o">-</span> <span class="mf">0.5</span><span class="p">)</span></div><div class='line' id='LC416'>		<span class="p">}</span></div><div class='line' id='LC417'>	<span class="p">},</span></div><div class='line' id='LC418'><br/></div><div class='line' id='LC419'>	<span class="cm">/*!public</span></div><div class='line' id='LC420'><span class="cm">		Goes to target and then back at variable rate</span></div><div class='line' id='LC421'><span class="cm">	*/</span></div><div class='line' id='LC422'>	<span class="nx">bounceParabolic</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC423'>		<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC424'>			<span class="k">return</span> <span class="o">-</span><span class="mi">4</span> <span class="o">*</span> <span class="nx">t</span> <span class="o">*</span> <span class="p">(</span><span class="nx">t</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC425'>		<span class="p">}</span></div><div class='line' id='LC426'>	<span class="p">},</span></div><div class='line' id='LC427'><br/></div><div class='line' id='LC428'>	<span class="cm">/*!public</span></div><div class='line' id='LC429'><span class="cm">		Goes to target and then back smoothly</span></div><div class='line' id='LC430'><span class="cm">	*/</span></div><div class='line' id='LC431'>	<span class="nx">bounceSmooth</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC432'>		<span class="nx">transform</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC433'>			<span class="k">return</span> <span class="mf">0.5</span> <span class="o">-</span> <span class="mf">0.5</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="nx">t</span><span class="p">);</span></div><div class='line' id='LC434'>		<span class="p">}</span></div><div class='line' id='LC435'>	<span class="p">}</span></div><div class='line' id='LC436'><span class="p">}</span></div><div class='line' id='LC437'><br/></div><div class='line' id='LC438'><span class="cm">/*!</span></div><div class='line' id='LC439'><span class="cm">	Utility objects for internal use</span></div><div class='line' id='LC440'><span class="cm">*/</span></div><div class='line' id='LC441'><span class="kd">var</span> <span class="nx">jsAnimUtil</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'>	<span class="nx">interp</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">v1</span><span class="p">,</span> <span class="nx">v2</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC444'>		<span class="k">if</span><span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">v1</span><span class="p">))</span></div><div class='line' id='LC445'>			<span class="nx">v1</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC446'>		<span class="k">if</span><span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">v2</span><span class="p">))</span></div><div class='line' id='LC447'>			<span class="nx">v2</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC448'>		<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span>  <span class="nx">v1</span> <span class="o">+</span> <span class="nx">percent</span> <span class="o">*</span> <span class="p">(</span><span class="nx">v2</span><span class="o">-</span><span class="nx">v1</span><span class="p">);</span></div><div class='line' id='LC449'>		<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC450'>	<span class="p">},</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>	<span class="nx">getCSS</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">field</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC453'>		<span class="kd">var</span> <span class="nx">css</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span> <span class="o">?</span></div><div class='line' id='LC454'>			<span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC455'>			<span class="o">:</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">currentStyle</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">style</span><span class="p">;</span></div><div class='line' id='LC456'>		<span class="k">return</span> <span class="nx">css</span><span class="p">[</span><span class="nx">field</span><span class="p">];</span></div><div class='line' id='LC457'>	<span class="p">},</span></div><div class='line' id='LC458'><br/></div><div class='line' id='LC459'>	<span class="nx">explode</span> <span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">delimiter</span><span class="p">,</span> <span class="nx">string</span><span class="p">,</span> <span class="nx">limit</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>		<span class="c1">// http://kevin.vanzonneveld.net</span></div><div class='line' id='LC461'>		<span class="c1">// +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)</span></div><div class='line' id='LC462'>		<span class="c1">// +     improved by: kenneth</span></div><div class='line' id='LC463'>		<span class="c1">// +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)</span></div><div class='line' id='LC464'>		<span class="c1">// +     improved by: d3x</span></div><div class='line' id='LC465'>		<span class="c1">// +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)</span></div><div class='line' id='LC466'>		<span class="c1">// *     example 1: explode(&#39; &#39;, &#39;Kevin van Zonneveld&#39;);</span></div><div class='line' id='LC467'>		<span class="c1">// *     returns 1: {0: &#39;Kevin&#39;, 1: &#39;van&#39;, 2: &#39;Zonneveld&#39;}</span></div><div class='line' id='LC468'>		<span class="c1">// *     example 2: explode(&#39;=&#39;, &#39;a=bc=d&#39;, 2);</span></div><div class='line' id='LC469'>		<span class="c1">// *     returns 2: [&#39;a&#39;, &#39;bc=d&#39;]</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>		<span class="kd">var</span> <span class="nx">emptyArray</span> <span class="o">=</span> <span class="p">{</span> <span class="mi">0</span><span class="o">:</span> <span class="s1">&#39;&#39;</span> <span class="p">};</span></div><div class='line' id='LC472'><br/></div><div class='line' id='LC473'>		<span class="c1">// third argument is not required</span></div><div class='line' id='LC474'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">2</span> <span class="o">||</span></div><div class='line' id='LC475'>			<span class="k">typeof</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">||</span></div><div class='line' id='LC476'>			<span class="k">typeof</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="p">)</span></div><div class='line' id='LC477'>		<span class="p">{</span></div><div class='line' id='LC478'>			<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC479'>		<span class="p">}</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">delimiter</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span> <span class="o">||</span></div><div class='line' id='LC482'>			<span class="nx">delimiter</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span></div><div class='line' id='LC483'>			<span class="nx">delimiter</span> <span class="o">===</span> <span class="kc">null</span> <span class="p">)</span></div><div class='line' id='LC484'>		<span class="p">{</span></div><div class='line' id='LC485'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC486'>		<span class="p">}</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>		<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">delimiter</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span> <span class="o">||</span></div><div class='line' id='LC489'>			<span class="k">typeof</span> <span class="nx">delimiter</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span></div><div class='line' id='LC490'>			<span class="k">typeof</span> <span class="nx">string</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span> <span class="o">||</span></div><div class='line' id='LC491'>			<span class="k">typeof</span> <span class="nx">string</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span></div><div class='line' id='LC492'>		<span class="p">{</span></div><div class='line' id='LC493'>			<span class="k">return</span> <span class="nx">emptyArray</span><span class="p">;</span></div><div class='line' id='LC494'>		<span class="p">}</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">delimiter</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC497'>			<span class="nx">delimiter</span> <span class="o">=</span> <span class="s1">&#39;1&#39;</span><span class="p">;</span></div><div class='line' id='LC498'>		<span class="p">}</span></div><div class='line' id='LC499'><br/></div><div class='line' id='LC500'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">limit</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC501'>			<span class="k">return</span> <span class="nx">string</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="nx">delimiter</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span></div><div class='line' id='LC502'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC503'>			<span class="c1">// support for limit argument</span></div><div class='line' id='LC504'>			<span class="kd">var</span> <span class="nx">splitted</span> <span class="o">=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="nx">delimiter</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span></div><div class='line' id='LC505'>			<span class="kd">var</span> <span class="nx">partA</span> <span class="o">=</span> <span class="nx">splitted</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">limit</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC506'>			<span class="kd">var</span> <span class="nx">partB</span> <span class="o">=</span> <span class="nx">splitted</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="nx">delimiter</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span></div><div class='line' id='LC507'>			<span class="nx">partA</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">partB</span><span class="p">);</span></div><div class='line' id='LC508'>			<span class="k">return</span> <span class="nx">partA</span><span class="p">;</span></div><div class='line' id='LC509'>		<span class="p">}</span></div><div class='line' id='LC510'>	<span class="p">}</span></div><div class='line' id='LC511'><span class="p">}</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'><span class="cm">/*! public</span></div><div class='line' id='LC514'><span class="cm">	Prop objects</span></div><div class='line' id='LC515'><span class="cm">	Used to keep track of which property is being controlled</span></div><div class='line' id='LC516'><span class="cm">	Methods:</span></div><div class='line' id='LC517'><span class="cm">		update : update the property to where it should be at the given time</span></div><div class='line' id='LC518'><span class="cm">		current : return a natural representation of the current property</span></div><div class='line' id='LC519'><span class="cm">*/</span></div><div class='line' id='LC520'><span class="kd">var</span> <span class="nx">Prop</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC521'>	<span class="cm">/*! public</span></div><div class='line' id='LC522'><span class="cm">		Wait, while doing no animating</span></div><div class='line' id='LC523'><span class="cm">	*/</span></div><div class='line' id='LC524'>	<span class="nx">wait</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC525'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="p">{},</span></div><div class='line' id='LC526'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span> <span class="mi">0</span><span class="p">;}</span></div><div class='line' id='LC527'>	<span class="p">},</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>	<span class="cm">/*! public</span></div><div class='line' id='LC530'><span class="cm">		Follows a linear path</span></div><div class='line' id='LC531'><span class="cm">	*/</span></div><div class='line' id='LC532'>	<span class="nx">position</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC533'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC534'>			<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC535'>			<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">y</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">setPosition</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC538'>		<span class="p">},</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC541'>			<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span><span class="p">);</span></div><div class='line' id='LC542'>			<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span><span class="p">);</span></div><div class='line' id='LC543'>			<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">;</span></div><div class='line' id='LC544'>			<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">;</span></div><div class='line' id='LC545'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">Pos</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC546'>		<span class="p">}</span></div><div class='line' id='LC547'>	<span class="p">},</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>	<span class="cm">/*! public</span></div><div class='line' id='LC550'><span class="cm">		Follows a semicircular path</span></div><div class='line' id='LC551'><span class="cm">		Params:</span></div><div class='line' id='LC552'><span class="cm">			-clockwise : True for clockwise, false otherwise</span></div><div class='line' id='LC553'><span class="cm">	*/</span></div><div class='line' id='LC554'>	<span class="nx">positionSemicircle</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clockwise</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC555'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC556'>			<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC557'>				<span class="kd">var</span> <span class="nx">centerX</span> <span class="o">=</span> <span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">to</span><span class="p">.</span><span class="nx">x</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC558'>				<span class="kd">var</span> <span class="nx">centerY</span> <span class="o">=</span> <span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">to</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC559'><br/></div><div class='line' id='LC560'>				<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">centerY</span> <span class="o">-</span> <span class="nx">from</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC561'>				<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nx">from</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">centerX</span><span class="p">;</span></div><div class='line' id='LC562'><br/></div><div class='line' id='LC563'>				<span class="kd">var</span> <span class="nx">dist</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nx">h</span> <span class="o">*</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">w</span> <span class="o">*</span> <span class="nx">w</span><span class="p">);</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>				<span class="k">if</span><span class="p">(</span><span class="nx">w</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC566'>					<span class="k">if</span><span class="p">(</span><span class="nx">h</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC567'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC568'>					<span class="k">else</span></div><div class='line' id='LC569'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC570'>				<span class="p">}</span></div><div class='line' id='LC571'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC572'>					<span class="kd">var</span> <span class="nx">atan</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">atan</span><span class="p">(</span><span class="nx">h</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">w</span><span class="p">));</span></div><div class='line' id='LC573'>					<span class="k">if</span><span class="p">(</span><span class="nx">w</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC574'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="nx">atan</span><span class="p">;</span></div><div class='line' id='LC575'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC576'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">-</span> <span class="nx">atan</span><span class="p">;</span></div><div class='line' id='LC577'>					<span class="p">}</span></div><div class='line' id='LC578'>				<span class="p">}</span></div><div class='line' id='LC579'><br/></div><div class='line' id='LC580'>				<span class="k">if</span><span class="p">(</span><span class="nx">clockwise</span><span class="p">)</span></div><div class='line' id='LC581'>					<span class="kd">var</span> <span class="nx">addAngle</span> <span class="o">=</span> <span class="o">-</span> <span class="nx">percent</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span></div><div class='line' id='LC582'>				<span class="k">else</span></div><div class='line' id='LC583'>					<span class="kd">var</span> <span class="nx">addAngle</span> <span class="o">=</span> <span class="nx">percent</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span>	</div><div class='line' id='LC584'><br/></div><div class='line' id='LC585'>				<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="nx">initAngle</span> <span class="o">+</span> <span class="nx">addAngle</span><span class="p">;</span></div><div class='line' id='LC586'><br/></div><div class='line' id='LC587'>				<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">centerX</span> <span class="o">+</span> <span class="nx">dist</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">angle</span><span class="p">));</span></div><div class='line' id='LC588'>				<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">centerY</span> <span class="o">-</span> <span class="nx">dist</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">angle</span><span class="p">));</span></div><div class='line' id='LC589'><br/></div><div class='line' id='LC590'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">setPosition</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC591'>			<span class="p">},</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>			<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC594'>				<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span><span class="p">);</span></div><div class='line' id='LC595'>				<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span><span class="p">);</span></div><div class='line' id='LC596'>				<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">;</span></div><div class='line' id='LC597'>				<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">;</span></div><div class='line' id='LC598'>				<span class="k">return</span> <span class="k">new</span> <span class="nx">Pos</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC599'>			<span class="p">}</span></div><div class='line' id='LC600'>		<span class="p">}</span></div><div class='line' id='LC601'>	<span class="p">},</span></div><div class='line' id='LC602'><br/></div><div class='line' id='LC603'>	<span class="cm">/*! public</span></div><div class='line' id='LC604'><span class="cm">		Follows a circular path through target then back to start</span></div><div class='line' id='LC605'><span class="cm">		Params:</span></div><div class='line' id='LC606'><span class="cm">			-clockwise : True for clockwise, false otherwise</span></div><div class='line' id='LC607'><span class="cm">	*/</span></div><div class='line' id='LC608'>	<span class="nx">positionCircle</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">clockwise</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC609'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC610'>			<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC611'>				<span class="kd">var</span> <span class="nx">centerX</span> <span class="o">=</span> <span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">to</span><span class="p">.</span><span class="nx">x</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC612'>				<span class="kd">var</span> <span class="nx">centerY</span> <span class="o">=</span> <span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">to</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC613'><br/></div><div class='line' id='LC614'>				<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">centerY</span> <span class="o">-</span> <span class="nx">from</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC615'>				<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nx">from</span><span class="p">.</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">centerX</span><span class="p">;</span></div><div class='line' id='LC616'><br/></div><div class='line' id='LC617'>				<span class="kd">var</span> <span class="nx">dist</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nx">h</span> <span class="o">*</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">w</span> <span class="o">*</span> <span class="nx">w</span><span class="p">);</span></div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'>				<span class="k">if</span><span class="p">(</span><span class="nx">w</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC620'>					<span class="k">if</span><span class="p">(</span><span class="nx">h</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC621'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC622'>					<span class="k">else</span></div><div class='line' id='LC623'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">/</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC624'>				<span class="p">}</span></div><div class='line' id='LC625'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC626'>					<span class="kd">var</span> <span class="nx">atan</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">atan</span><span class="p">(</span><span class="nx">h</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">w</span><span class="p">));</span></div><div class='line' id='LC627'>					<span class="k">if</span><span class="p">(</span><span class="nx">w</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC628'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="nx">atan</span><span class="p">;</span></div><div class='line' id='LC629'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC630'>						<span class="kd">var</span> <span class="nx">initAngle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">-</span> <span class="nx">atan</span><span class="p">;</span></div><div class='line' id='LC631'>					<span class="p">}</span></div><div class='line' id='LC632'>				<span class="p">}</span></div><div class='line' id='LC633'><br/></div><div class='line' id='LC634'>				<span class="k">if</span><span class="p">(</span><span class="nx">clockwise</span><span class="p">)</span></div><div class='line' id='LC635'>					<span class="kd">var</span> <span class="nx">addAngle</span> <span class="o">=</span> <span class="mi">2</span> <span class="o">*</span> <span class="nx">percent</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span></div><div class='line' id='LC636'>				<span class="k">else</span></div><div class='line' id='LC637'>					<span class="kd">var</span> <span class="nx">addAngle</span> <span class="o">=</span> <span class="o">-</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">percent</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="p">;</span>	</div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>				<span class="kd">var</span> <span class="nx">angle</span> <span class="o">=</span> <span class="nx">initAngle</span> <span class="o">+</span> <span class="nx">addAngle</span><span class="p">;</span></div><div class='line' id='LC640'><br/></div><div class='line' id='LC641'>				<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">centerX</span> <span class="o">+</span> <span class="nx">dist</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span><span class="nx">angle</span><span class="p">));</span></div><div class='line' id='LC642'>				<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">centerY</span> <span class="o">+</span> <span class="nx">dist</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">angle</span><span class="p">));</span></div><div class='line' id='LC643'><br/></div><div class='line' id='LC644'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">setPosition</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC645'>			<span class="p">},</span></div><div class='line' id='LC646'><br/></div><div class='line' id='LC647'>			<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC648'>				<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span><span class="p">);</span></div><div class='line' id='LC649'>				<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span><span class="p">);</span></div><div class='line' id='LC650'>				<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">left</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">;</span></div><div class='line' id='LC651'>				<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">;</span></div><div class='line' id='LC652'>				<span class="k">return</span> <span class="k">new</span> <span class="nx">Pos</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">);</span></div><div class='line' id='LC653'>			<span class="p">}</span></div><div class='line' id='LC654'>		<span class="p">}</span></div><div class='line' id='LC655'>	<span class="p">},</span></div><div class='line' id='LC656'><br/></div><div class='line' id='LC657'>	<span class="c1">//public</span></div><div class='line' id='LC658'>	<span class="nx">top</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC659'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC660'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC661'>		<span class="p">},</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC664'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;top&#39;</span><span class="p">));</span></div><div class='line' id='LC665'>		<span class="p">}</span></div><div class='line' id='LC666'><br/></div><div class='line' id='LC667'>	<span class="p">},</span></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>	<span class="c1">//public</span></div><div class='line' id='LC670'>	<span class="nx">right</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC671'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC672'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">right</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC673'>		<span class="p">},</span></div><div class='line' id='LC674'><br/></div><div class='line' id='LC675'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC676'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;right&#39;</span><span class="p">));</span></div><div class='line' id='LC677'>		<span class="p">}</span></div><div class='line' id='LC678'>	<span class="p">},</span></div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'>	<span class="c1">//public</span></div><div class='line' id='LC681'>	<span class="nx">bottom</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC682'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC683'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC684'>		<span class="p">},</span></div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC687'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;bottom&#39;</span><span class="p">));</span></div><div class='line' id='LC688'>		<span class="p">}</span></div><div class='line' id='LC689'>	<span class="p">},</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>	<span class="c1">//public</span></div><div class='line' id='LC692'>	<span class="nx">left</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC693'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC694'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC695'>		<span class="p">},</span></div><div class='line' id='LC696'><br/></div><div class='line' id='LC697'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC698'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;left&#39;</span><span class="p">));</span></div><div class='line' id='LC699'>		<span class="p">}</span></div><div class='line' id='LC700'>	<span class="p">},</span></div><div class='line' id='LC701'><br/></div><div class='line' id='LC702'>	<span class="c1">//public</span></div><div class='line' id='LC703'>	<span class="nx">margin</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC704'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC705'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">margin</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC706'>		<span class="p">},</span></div><div class='line' id='LC707'><br/></div><div class='line' id='LC708'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC709'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;margin&#39;</span><span class="p">));</span></div><div class='line' id='LC710'>		<span class="p">}</span></div><div class='line' id='LC711'>	<span class="p">},</span></div><div class='line' id='LC712'><br/></div><div class='line' id='LC713'>	<span class="c1">//public</span></div><div class='line' id='LC714'>	<span class="nx">marginTop</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC715'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC716'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC717'>		<span class="p">},</span></div><div class='line' id='LC718'><br/></div><div class='line' id='LC719'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC720'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;marginTop&#39;</span><span class="p">));</span></div><div class='line' id='LC721'>		<span class="p">}</span></div><div class='line' id='LC722'>	<span class="p">},</span></div><div class='line' id='LC723'><br/></div><div class='line' id='LC724'>	<span class="c1">//public</span></div><div class='line' id='LC725'>	<span class="nx">marginRight</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC726'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC727'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginRight</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC728'>		<span class="p">},</span></div><div class='line' id='LC729'><br/></div><div class='line' id='LC730'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC731'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;marginRight&#39;</span><span class="p">));</span></div><div class='line' id='LC732'>		<span class="p">}</span></div><div class='line' id='LC733'>	<span class="p">},</span></div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'>	<span class="c1">//public</span></div><div class='line' id='LC736'>	<span class="nx">marginBottom</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC737'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC738'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginBottom</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC739'>		<span class="p">},</span></div><div class='line' id='LC740'><br/></div><div class='line' id='LC741'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC742'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;marginBottom&#39;</span><span class="p">));</span></div><div class='line' id='LC743'>		<span class="p">}</span></div><div class='line' id='LC744'>	<span class="p">},</span></div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'>	<span class="c1">//public</span></div><div class='line' id='LC747'>	<span class="nx">marginLeft</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC748'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC749'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC750'>		<span class="p">},</span></div><div class='line' id='LC751'><br/></div><div class='line' id='LC752'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC753'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;marginLeft&#39;</span><span class="p">));</span></div><div class='line' id='LC754'>		<span class="p">}</span></div><div class='line' id='LC755'>	<span class="p">},</span></div><div class='line' id='LC756'><br/></div><div class='line' id='LC757'>	<span class="c1">//public</span></div><div class='line' id='LC758'>	<span class="nx">padding</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC759'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC760'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">padding</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC761'>		<span class="p">},</span></div><div class='line' id='LC762'><br/></div><div class='line' id='LC763'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC764'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;padding&#39;</span><span class="p">));</span></div><div class='line' id='LC765'>		<span class="p">}</span></div><div class='line' id='LC766'>	<span class="p">},</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'>	<span class="c1">//public</span></div><div class='line' id='LC769'>	<span class="nx">paddingTop</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC770'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC771'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">paddingTop</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC772'>		<span class="p">},</span></div><div class='line' id='LC773'><br/></div><div class='line' id='LC774'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC775'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;paddingTop&#39;</span><span class="p">));</span></div><div class='line' id='LC776'>		<span class="p">}</span></div><div class='line' id='LC777'>	<span class="p">},</span></div><div class='line' id='LC778'><br/></div><div class='line' id='LC779'>	<span class="c1">//public</span></div><div class='line' id='LC780'>	<span class="nx">paddingRight</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC781'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC782'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">paddingRight</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC783'>		<span class="p">},</span></div><div class='line' id='LC784'><br/></div><div class='line' id='LC785'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC786'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;paddingRight&#39;</span><span class="p">));</span></div><div class='line' id='LC787'>		<span class="p">}</span></div><div class='line' id='LC788'>	<span class="p">},</span></div><div class='line' id='LC789'><br/></div><div class='line' id='LC790'>	<span class="c1">//public</span></div><div class='line' id='LC791'>	<span class="nx">paddingBottom</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC792'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC793'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">paddingBottom</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC794'>		<span class="p">},</span></div><div class='line' id='LC795'><br/></div><div class='line' id='LC796'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC797'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;paddingBottom&#39;</span><span class="p">));</span></div><div class='line' id='LC798'>		<span class="p">}</span></div><div class='line' id='LC799'>	<span class="p">},</span></div><div class='line' id='LC800'><br/></div><div class='line' id='LC801'>	<span class="c1">//public</span></div><div class='line' id='LC802'>	<span class="nx">paddingLeft</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC803'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC804'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">paddingLeft</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC805'>		<span class="p">},</span></div><div class='line' id='LC806'><br/></div><div class='line' id='LC807'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC808'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;paddingLeft&#39;</span><span class="p">));</span></div><div class='line' id='LC809'>		<span class="p">}</span></div><div class='line' id='LC810'>	<span class="p">},</span></div><div class='line' id='LC811'><br/></div><div class='line' id='LC812'>	<span class="c1">//public</span></div><div class='line' id='LC813'>	<span class="nx">borderWidth</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC814'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC815'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderWidth</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC816'>		<span class="p">},</span></div><div class='line' id='LC817'><br/></div><div class='line' id='LC818'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC819'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;borderWidth&#39;</span><span class="p">));</span></div><div class='line' id='LC820'>		<span class="p">}</span></div><div class='line' id='LC821'>	<span class="p">},</span></div><div class='line' id='LC822'><br/></div><div class='line' id='LC823'>	<span class="c1">//public</span></div><div class='line' id='LC824'>	<span class="nx">borderTopWidth</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC825'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC826'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderTopWidth</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC827'>		<span class="p">},</span></div><div class='line' id='LC828'><br/></div><div class='line' id='LC829'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC830'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;borderTopWidth&#39;</span><span class="p">));</span></div><div class='line' id='LC831'>		<span class="p">}</span></div><div class='line' id='LC832'>	<span class="p">},</span></div><div class='line' id='LC833'><br/></div><div class='line' id='LC834'>	<span class="c1">//public</span></div><div class='line' id='LC835'>	<span class="nx">borderRightWidth</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC836'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC837'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderRightWidth</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC838'>		<span class="p">},</span></div><div class='line' id='LC839'><br/></div><div class='line' id='LC840'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC841'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;borderRightWidth&#39;</span><span class="p">));</span></div><div class='line' id='LC842'>		<span class="p">}</span></div><div class='line' id='LC843'>	<span class="p">},</span></div><div class='line' id='LC844'><br/></div><div class='line' id='LC845'>	<span class="c1">//public</span></div><div class='line' id='LC846'>	<span class="nx">borderBottomWidth</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC847'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC848'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderBottomWidth</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC849'>		<span class="p">},</span></div><div class='line' id='LC850'><br/></div><div class='line' id='LC851'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC852'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;borderBottomWidth&#39;</span><span class="p">));</span></div><div class='line' id='LC853'>		<span class="p">}</span></div><div class='line' id='LC854'>	<span class="p">},</span></div><div class='line' id='LC855'><br/></div><div class='line' id='LC856'>	<span class="c1">//public</span></div><div class='line' id='LC857'>	<span class="nx">borderLeftWidth</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC858'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC859'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderLeftWidth</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC860'>		<span class="p">},</span></div><div class='line' id='LC861'><br/></div><div class='line' id='LC862'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC863'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;borderLeftWidth&#39;</span><span class="p">));</span></div><div class='line' id='LC864'>		<span class="p">}</span></div><div class='line' id='LC865'>	<span class="p">},</span></div><div class='line' id='LC866'><br/></div><div class='line' id='LC867'>	<span class="c1">//public</span></div><div class='line' id='LC868'>	<span class="nx">fontSize</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC869'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC870'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;pt&quot;</span><span class="p">;</span></div><div class='line' id='LC871'>		<span class="p">},</span></div><div class='line' id='LC872'><br/></div><div class='line' id='LC873'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC874'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;fontSize&#39;</span><span class="p">));</span></div><div class='line' id='LC875'>		<span class="p">}</span></div><div class='line' id='LC876'>	<span class="p">},</span></div><div class='line' id='LC877'><br/></div><div class='line' id='LC878'>	<span class="c1">//public</span></div><div class='line' id='LC879'>	<span class="nx">height</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC880'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC881'>			<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC882'><br/></div><div class='line' id='LC883'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">v</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC884'><br/></div><div class='line' id='LC885'>			<span class="c1">//Update the position if registered</span></div><div class='line' id='LC886'>			<span class="k">if</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">positionRegistered</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC887'>				<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span><span class="p">)</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">;</span></div><div class='line' id='LC888'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC889'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="nx">y</span> <span class="o">-</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC890'>			<span class="p">}</span></div><div class='line' id='LC891'>		<span class="p">},</span></div><div class='line' id='LC892'><br/></div><div class='line' id='LC893'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC894'>			<span class="kd">var</span> <span class="nx">ht</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;height&#39;</span><span class="p">);</span></div><div class='line' id='LC895'>			<span class="k">if</span><span class="p">(</span><span class="nx">ht</span> <span class="o">==</span> <span class="s2">&quot;auto&quot;</span><span class="p">)</span></div><div class='line' id='LC896'>				<span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">;</span></div><div class='line' id='LC897'>			<span class="k">else</span></div><div class='line' id='LC898'>				<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">ht</span><span class="p">);</span></div><div class='line' id='LC899'>		<span class="p">}</span></div><div class='line' id='LC900'>	<span class="p">},</span></div><div class='line' id='LC901'><br/></div><div class='line' id='LC902'>	<span class="c1">//public</span></div><div class='line' id='LC903'>	<span class="nx">width</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC904'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC905'>			<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC906'><br/></div><div class='line' id='LC907'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">v</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC908'><br/></div><div class='line' id='LC909'>			<span class="c1">//Update the position if registered</span></div><div class='line' id='LC910'>			<span class="k">if</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">positionRegistered</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC911'>				<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span><span class="p">)</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">;</span></div><div class='line' id='LC912'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC913'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span> <span class="o">=</span> <span class="nx">x</span> <span class="o">-</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC914'>			<span class="p">}</span></div><div class='line' id='LC915'>		<span class="p">},</span></div><div class='line' id='LC916'><br/></div><div class='line' id='LC917'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC918'>			<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;width&#39;</span><span class="p">));</span></div><div class='line' id='LC919'>		<span class="p">}</span></div><div class='line' id='LC920'>	<span class="p">},</span></div><div class='line' id='LC921'><br/></div><div class='line' id='LC922'>	<span class="c1">//public</span></div><div class='line' id='LC923'>	<span class="nx">dimension</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC924'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC925'>			<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">h</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">h</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC926'>			<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">w</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">w</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC927'><br/></div><div class='line' id='LC928'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">h</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC929'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">w</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC930'><br/></div><div class='line' id='LC931'>			<span class="c1">//Update the position if registered</span></div><div class='line' id='LC932'>			<span class="k">if</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">positionRegistered</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC933'>				<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span><span class="p">)</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">;</span></div><div class='line' id='LC934'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC935'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginTop</span> <span class="o">=</span> <span class="p">(</span><span class="nx">y</span> <span class="o">-</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfHeight</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>				<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span><span class="p">)</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">;</span></div><div class='line' id='LC938'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC939'>				<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">marginLeft</span> <span class="o">=</span> <span class="p">(</span><span class="nx">x</span> <span class="o">-</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">halfWidth</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC940'>			<span class="p">}</span></div><div class='line' id='LC941'>		<span class="p">},</span></div><div class='line' id='LC942'><br/></div><div class='line' id='LC943'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC944'>			<span class="kd">var</span> <span class="nx">ht</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;height&#39;</span><span class="p">);</span></div><div class='line' id='LC945'>			<span class="k">if</span><span class="p">(</span><span class="nx">ht</span> <span class="o">==</span> <span class="s2">&quot;auto&quot;</span><span class="p">)</span></div><div class='line' id='LC946'>				<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">;</span></div><div class='line' id='LC947'>			<span class="k">else</span></div><div class='line' id='LC948'>				<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">ht</span><span class="p">);</span></div><div class='line' id='LC949'>			<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;width&#39;</span><span class="p">));</span></div><div class='line' id='LC950'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">Dim</span><span class="p">(</span><span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC951'>		<span class="p">}</span></div><div class='line' id='LC952'>	<span class="p">},</span></div><div class='line' id='LC953'><br/></div><div class='line' id='LC954'>	<span class="c1">//public</span></div><div class='line' id='LC955'>	<span class="nx">color</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC956'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC957'>			<span class="nx">r</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC958'>			<span class="nx">g</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">g</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">g</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC959'>			<span class="nx">b</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC960'><br/></div><div class='line' id='LC961'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">color</span> <span class="o">=</span> <span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC962'>		<span class="p">},</span></div><div class='line' id='LC963'><br/></div><div class='line' id='LC964'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC965'>			<span class="kd">var</span> <span class="nx">color</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;color&#39;</span><span class="p">);</span></div><div class='line' id='LC966'>			<span class="nx">color</span> <span class="o">=</span> <span class="nx">color</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="nx">color</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC967'>			<span class="kd">var</span> <span class="nx">rgb</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">explode</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">,</span><span class="nx">color</span><span class="p">);</span></div><div class='line' id='LC968'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">Col</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">2</span><span class="p">]));</span></div><div class='line' id='LC969'>		<span class="p">}</span></div><div class='line' id='LC970'>	<span class="p">},</span></div><div class='line' id='LC971'><br/></div><div class='line' id='LC972'>	<span class="c1">//public</span></div><div class='line' id='LC973'>	<span class="nx">backgroundColor</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC974'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC975'>			<span class="nx">r</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC976'>			<span class="nx">g</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">g</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">g</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC977'>			<span class="nx">b</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC978'><br/></div><div class='line' id='LC979'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC980'>		<span class="p">},</span></div><div class='line' id='LC981'><br/></div><div class='line' id='LC982'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC983'>			<span class="kd">var</span> <span class="nx">color</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;backgroundColor&#39;</span><span class="p">);</span></div><div class='line' id='LC984'>			<span class="nx">color</span> <span class="o">=</span> <span class="nx">color</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="nx">color</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC985'>			<span class="kd">var</span> <span class="nx">rgb</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">explode</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">,</span><span class="nx">color</span><span class="p">);</span></div><div class='line' id='LC986'><br/></div><div class='line' id='LC987'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">Col</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">2</span><span class="p">]));</span></div><div class='line' id='LC988'>		<span class="p">}</span></div><div class='line' id='LC989'>	<span class="p">},</span></div><div class='line' id='LC990'><br/></div><div class='line' id='LC991'>	<span class="c1">//public</span></div><div class='line' id='LC992'>	<span class="nx">borderColor</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC993'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC994'>			<span class="nx">r</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">r</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC995'>			<span class="nx">g</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">g</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">g</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC996'>			<span class="nx">b</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="nx">from</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span> <span class="nx">to</span><span class="p">.</span><span class="nx">b</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC997'><br/></div><div class='line' id='LC998'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">borderColor</span> <span class="o">=</span> <span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">g</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC999'>		<span class="p">},</span></div><div class='line' id='LC1000'><br/></div><div class='line' id='LC1001'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1002'>			<span class="kd">var</span> <span class="nx">color</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;borderColor&#39;</span><span class="p">);</span></div><div class='line' id='LC1003'>			<span class="nx">color</span> <span class="o">=</span> <span class="nx">color</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="nx">color</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1004'>			<span class="kd">var</span> <span class="nx">rgb</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">explode</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">,</span><span class="nx">color</span><span class="p">);</span></div><div class='line' id='LC1005'>			<span class="k">return</span> <span class="k">new</span> <span class="nx">Col</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">rgb</span><span class="p">[</span><span class="mi">2</span><span class="p">]));</span></div><div class='line' id='LC1006'>		<span class="p">}</span></div><div class='line' id='LC1007'>	<span class="p">},</span></div><div class='line' id='LC1008'><br/></div><div class='line' id='LC1009'>	<span class="c1">//public</span></div><div class='line' id='LC1010'>	<span class="nx">opacity</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1011'>		<span class="nx">update</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC1012'>			<span class="nx">v</span> <span class="o">=</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">interp</span><span class="p">(</span><span class="mi">100</span><span class="o">*</span><span class="nx">from</span><span class="p">,</span> <span class="mi">100</span><span class="o">*</span><span class="nx">to</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span>			</div><div class='line' id='LC1013'>			<span class="nx">obj</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">opacity</span> <span class="o">=</span> <span class="nx">v</span> <span class="o">/</span> <span class="mi">100</span><span class="p">;</span></div><div class='line' id='LC1014'>		<span class="p">},</span></div><div class='line' id='LC1015'><br/></div><div class='line' id='LC1016'>		<span class="nx">current</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1017'>			<span class="k">return</span> <span class="nx">jsAnimUtil</span><span class="p">.</span><span class="nx">getCSS</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;opacity&#39;</span><span class="p">);</span></div><div class='line' id='LC1018'>		<span class="p">}</span></div><div class='line' id='LC1019'>	<span class="p">}</span></div><div class='line' id='LC1020'><span class="p">}</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.05480s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/kevinjdolan/jsanim/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

