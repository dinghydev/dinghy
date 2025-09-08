import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTHENTICATION_GOOGLE = {
  _shape: 'mxgraph.citrix2.authentication_google',
}

export function AuthenticationGoogle(props: DiagramNodeProps) {
  return <Shape {...AUTHENTICATION_GOOGLE} {...props} />
}
