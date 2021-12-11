import { OptimismCompilerApi } from "./optimism-compiler"
import { LibraryProfile } from "@remixproject/plugin-utils"

export const compilerProfile: LibraryProfile<OptimismCompilerApi> = {
  name: "nahmii-compiler",
  methods: ["compile", "getCompilationResult"],
  events: ["compilationFinished"],
}
