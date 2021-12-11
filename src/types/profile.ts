import { NahmiiCompilerApi } from "./optimism-compiler"
import { LibraryProfile } from "@remixproject/plugin-utils"

export const compilerProfile: LibraryProfile<NahmiiCompilerApi> = {
  name: "nahmii-compiler",
  methods: ["compile", "getCompilationResult"],
  events: ["compilationFinished"],
}
