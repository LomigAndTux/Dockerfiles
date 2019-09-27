alias hugo-serve='docker run --rm -v $(pwd):/src -p 1313:1313 hugo server -D --bind=0.0.0.0'
alias hugo='docker run --rm -v $(pwd):/src hugo'

