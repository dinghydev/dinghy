import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTHENTICATION_GOOGLE = {
  _shape: 'mxgraph.citrix2.authentication_google',
}

export function AuthenticationGoogle(props: DiagramNodeProps) {
  return <Shape {...AUTHENTICATION_GOOGLE} {...props} />
}
