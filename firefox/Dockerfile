FROM lomigandtux/debian-x-base

RUN apt -y update && apt -y install \
    apulse \
    ffmpeg \
    firefox-l10n-fr \
    libasound2 \
    libgl1-mesa-dri \
    libgl1-mesa-glx \
    libpulse0 \
    && rm -rf /var/lib/apt/lists/*

RUN echo 'pref("browser.tabs.remote.autostart", false); \n\
pref("network.dnsCacheEntries", 2000); \n\
pref("network.dnsCacheExpiration", 14400); \n\
pref("network.dnsCacheExpirationGracePeriod", 14400);\n\
pref("browser.sessionhistory.max_total_viewers", 0);\n\
pref("browser.sessionhistory.max_entries", 5);\n\
pref("browser.cache.memory.enable", true);\n\
pref("browser.cache.disk.enable", false);\n\
pref("browser.cache.memory.capacity", 512000);\n\
pref("dom.image-lazy-loading.enabled", true);\n\
pref("reader.parse-on-load.enabled", false);\n\
pref("reader.parse-on-load.force-enabled", false);\n\
pref("browser.pocket.enabled", false);\n\
pref("loop.enabled", false);\n\
pref("browser.sessionstore.resume_from_crash", false);\n\
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);\n\
pref("browser.newtabpage.activity-stream.telemetry", false);\n\
pref("browser.ping-centre.telemetry", false);\n\
pref("toolkit.telemetry.archive.enabled", false);\n\
pref("toolkit.telemetry.bhrPing.enabled", false);\n\
pref("toolkit.telemetry.enabled", false);\n\
pref("toolkit.telemetry.firstShutdownPing.enabled", false);\n\
pref("toolkit.telemetry.hybridContent.enabled", false);\n\
pref("toolkit.telemetry.newProfilePing.enabled", false);\n\
pref("toolkit.telemetry.reportingpolicy.firstRun", false);\n\
pref("toolkit.telemetry.shutdownPingSender.enabled", false);\n\
pref("toolkit.telemetry.unified ", false);\n\
pref("toolkit.telemetry.updatePing.enabled ", false);\n\
pref("app.normandy.enabled", false);\n\
pref("app.normandy.first_run", false);\n\
pref("app.normandy.remotesettings.enabled", false);\n\
pref("app.normandy.dev_mode", false);\n\
pref("beacon.enabled", false);\n\
pref("browser.tabs.crashreporting.includeurl", false);\n\
pref("browser.tabs.crashreporting.requestemail", false);\n\
pref("browser.tabs.crashreporting.sendreport", false);\n\
pref("datareporting.policy.datasubmissionenabled", false);\n\
pref("datareporting.policy.datasubmissionpolicybypassnotification", false);\n\
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);\n\
pref("dom.ipc.plugins.reportcrashurl", false);\n\
pref("dom.ipc.report.processhangs", false);\n\
pref("dom.ipc.tabs.createkillhardcrashreports", false);\n\
pref("dom.reporting.enabled", false);\n\
pref("dom.reporting.featurepolicy.enabled", false);\n\
pref("dom.reporting.header.enabled", false);\n\
pref("dom.reporting.testing.enabled", false);\n\
pref("dom.webcomponents.shadowdom.report_usage", false);\n\
pref("extension.webcompat-reporter.enabled", false);\n\
pref("image.mem.debug-reporting", false);\n\
pref("memory.dump_reports_on_oom", false);\n\
pref("security.ssl.errorreporting.automatic", false);\n\
pref("security.ssl.errorreporting.enabled", false);\n\
pref("services.sync.prefs.sync.browser.crashreports.unsubmittedcheck.autosubmit2", false);\n\
pref("privacy.trackingprotection.enabled", true);\n\
pref("security.ocsp.enabled" , false);\n\
pref("security.ocsp.get.enabled", false);\n\
pref("browser.safebrowsing.malware.enabled", false);\n\
pref("browser.safebrowsing.phishing.enabled ", false);\n\
pref("geo.enabled", false);\n\
pref("offline-apps.allow_by_default", false);\n\
pref("browser.offline-apps.notify", false);\n\
pref("browser.cache.offline.enable", false);\n\
pref("browser.cache.offline.capacity", 0);\n\
pref("network.manage-offline-status", false);\n\
pref("network.captive-portal-service.enabled", false);\n\
pref("toolkit.telemetry.shutdownpingsender.enabled", false);\n\
pref("gfx.webrender.all", true);\n\
pref("gfx.webrender.enabled", false);\n\
pref("layers.acceleration.disabled", false);\n\
pref("gfx.filter.nearest.force-enabled", true);\n\
pref("stagefright.force-enabled", false);\n\
pref("webgl.force-enabled", false);\n\
pref("network.idn_show_punycode", false);' >> /etc/firefox/syspref.js

COPY entrypoint.sh /usr/bin/startfirefox

VOLUME /root/.mozilla
ENTRYPOINT [ "startfirefox" ]
