set nocompatible

let s:cache = expand('<sfile>:p:h') . '/cache/dpp'
let s:repos = [
\   'Shougo/dpp.vim',
\   'Shougo/dpp-ext-installer',
\   'Shougo/dpp-protocol-git',
\   'vim-denops/denops.vim',
\ ]
let g:readme_viewer#plugin_manager = 'dpp.vim'

if &runtimepath !~# s:cache
  for repo in s:repos
    let repo_path = s:cache . '/repos/github.com/' . repo
    if !isdirectory(repo_path)
      execute '!git clone https://github.com/' . repo
            \ '--depth 1 ' . repo_path
    endif
    execute 'set runtimepath^=' . repo_path
  endfor
endif

