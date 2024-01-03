import {
  BaseConfig,
  ConfigReturn,
  ContextBuilder,
  Dpp,
  Plugin,
} from "https://deno.land/x/dpp_vim@v0.0.9/types.ts";
import { Denops } from "https://deno.land/x/dpp_vim@v0.0.9/deps.ts";

export class Config extends BaseConfig {
  override async config(args: {
    denops: Denops;
    contextBuilder: ContextBuilder;
    basePath: string;
    dpp: Dpp;
  }): Promise<ConfigReturn> {
    args.contextBuilder.setGlobal({
      protocols: ["git"],
    });

    const pluginList = [
      {
        lazy: false,
        repo: "Shougo/dpp.vim",
        name: "dpp.vim",
      },
      {
        lazy: false,
        repo: "Shougo/dpp-ext-installer",
        name: "dpp-ext-installer",
      },
      {
        lazy: false,
        repo: "Shougo/dpp-protocol-git",
        name: "dpp-protocol-git",
      },
      {
        lazy: false,
        repo: "vim-denops/denops.vim",
        name: "denops.vim",
      },
      {
        lazy: false,
        repo: "yasunori0418/vim-readme-viewer",
        name: "vim-readme-viewer",
        rev: "feat-dpp_support"
      },
    ] as Plugin[];

    return {
      plugins: pluginList,
    };
  }
}
