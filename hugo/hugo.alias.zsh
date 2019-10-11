# zsh aliases
alias hugo-edit='docker run --rm -v $(pwd):/src -p 1313:1313 lomigandtux/hugo /usr/local/bin/hugo server -D --bind=0.0.0.0'
alias hugo-serve="docker run --rm -v /home/lomig/Documents/Blog/Hugo/:/src -v /home/lomig/Documents/Blog/Publication:/output -p 1313:1313 lomigandtux/hugo /usr/local/bin/hugo -d /output"
alias hugo='docker run --rm -v $(pwd):/src lomigandtux/hugo /usr/local/bin/hugo'


