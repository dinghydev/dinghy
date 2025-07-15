import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LONG_TERM_SECURITY_CREDENTIAL = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.long_term_security_credential;',
  _width: 78,
  _height: 69,
}

export function LongTermSecurityCredential(props: DiagramNodeProps) {
  return <Shape {...LONG_TERM_SECURITY_CREDENTIAL} {...props} />
}
