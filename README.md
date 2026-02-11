# Glassdoor Xray

A Tampermonkey userscript that reveals hidden company reviews on Glassdoor by removing content locks and blur effects.

## Features

- Removes Glassdoor's content lock overlay and paywall
- Reveals hidden review text (Pros/Cons sections)
- Works across multiple Glassdoor international domains
- Lightweight CSS-only implementation
- No data collection or external requests
- Automatic updates via Tampermonkey

## Installation

### Prerequisites

You need a userscript manager installed in your browser:

- **Chrome/Edge**: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
- **Safari**: [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### Install the Script

1. Click here to install: [glassdoor-xray.user.js](https://github.com/moscovium-mc/glassdoor-xray/raw/main/glassdoor-xray.user.js)
2. Your userscript manager will prompt you to install
3. Click "Install" or "Confirm Installation"
4. Navigate to any Glassdoor company review page

The script will automatically activate on supported pages.

## Usage

Once installed, the script runs automatically on Glassdoor review pages. It will:

- Remove the content lock overlay and "Add your review" paywall
- Reveal blurred and hidden review text (Pros/Cons sections)
- Hide "Add Review or Salary" prompts
- Make all review content readable without sign-in
- Restore normal text selection and interaction

No manual activation or configuration required.

## Supported Domains

- glassdoor.com (United States)
- glassdoor.co.uk (United Kingdom)
- glassdoor.ca (Canada)
- glassdoor.com.au (Australia)
- glassdoor.ie (Ireland)
- glassdoor.co.in (India)
- glassdoor.co.nz (New Zealand)
- glassdoor.sg (Singapore)
- glassdoor.com.hk (Hong Kong)

## How It Works

The script uses CSS overrides to:

1. Hide the content lock overlay and backdrop
2. Remove opacity and blur filters from collapsed review text
3. Hide "Add Review or Salary" prompts and CTAs
4. Restore normal text visibility and interaction

This is a purely cosmetic modification using CSS. No API calls, no data manipulation, no network requests.

## Troubleshooting

### Script not working

- Verify your userscript manager is enabled
- Check that Glassdoor Xray shows as "enabled" in Tampermonkey
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache if issues persist

### Still seeing content lock

Glassdoor may have updated their CSS classes or HTML structure. Please [open an issue](https://github.com/moscovium-mc/glassdoor-xray/issues) with:

- The URL where you're seeing the issue
- Your browser and userscript manager versions
- A screenshot if possible

## Updates

The script includes automatic update functionality. Tampermonkey will check for updates periodically and notify you when a new version is available.

## Contributing

Contributions are welcome. If Glassdoor changes their review page structure:

1. Fork this repository
2. Update the CSS selectors in `glassdoor-xray.user.js`
3. Test on multiple Glassdoor domains
4. Submit a pull request with a description of your changes

## Disclaimer

This script is provided for educational purposes. It removes CSS styling that obscures publicly available content on Glassdoor's website. Users should respect Glassdoor's Terms of Service and use this tool responsibly. The author is not responsible for any consequences of using this script.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

**moscovium-mc**

- GitHub: [@moscovium-mc](https://github.com/moscovium-mc)

## Support

If you find this script useful:

- Star the repository
- Report bugs via [GitHub Issues](https://github.com/moscovium-mc/glassdoor-xray/issues)
- Share with others who might benefit

---

**Note**: This script does not bypass authentication, access private data, or modify Glassdoor's servers. It only removes CSS styling on the client side.
