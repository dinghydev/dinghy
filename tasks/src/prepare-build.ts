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
  await execa({
    stderr: 'inherit',
    stdout: 'inherit',
    input: `
      set -e
      cp ../docker/images/51-tf-base/fs-root/terraform/versions.json ../docker/images/58-tf/versions.json
    `,
  })`sh`
}
