import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VAULT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.archive;',
  },
  _width: 63,
  _height: 78,
}

export function Vault(props: DiagramNodeProps) {
  return <Shape {...VAULT} {...props} _style={extendStyle(VAULT, props)} />
}
