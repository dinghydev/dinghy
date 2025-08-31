import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATION_GOOGLE = {
  _shape: 'mxgraph.citrix2.authentication_google',
}

export function AuthenticationGoogle(props: DiagramNodeProps) {
  return <Shape {...AUTHENTICATION_GOOGLE} {...props} />
}
