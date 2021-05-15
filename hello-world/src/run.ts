import * as core from '@actions/core'

interface Inputs {
  name: string
}

export const run = async (inputs: Inputs): Promise<void> => {
  core.info(`my name is ${inputs.name}`)
}
