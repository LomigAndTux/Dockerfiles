# zsh aliases
alias hugo-edit='docker run --it -u hugo -v $(pwd):/src -p 1313:1313 lomigandtux/hugo hugo serve -D --bind=0.0.0.0'
#alias hugo-serve="docker run --rm -v /home/lomig/Documents/Blog/Hugo/:/src -v /home/lomig/Documents/Blog/Publication:/output -p 1313:1313 lomigandtux/hugo /usr/local/bin/hugo -d /output"
alias hugo='docker run --it -u hugo -v $(pwd):/src lomigandtux/hugo hugo'


