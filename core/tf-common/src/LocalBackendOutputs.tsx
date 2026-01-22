import { LocalFile } from './LocalFile.tsx'
import { BackendOutputs } from './BackendOutputs.tsx'

export function LocalBackendOutputs(props: any) {
  return (
    <BackendOutputs
      component={LocalFile}
      outputProtocolPrefix='file://'
      {...props}
    />
  )
}
