import { execa } from 'execa'

if (import.meta.main) {
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
    input: `
      set -e
      cp ../cli/src/shared/* ../core/base-components/src/cli-shared/
    `,
  })`sh`
}
