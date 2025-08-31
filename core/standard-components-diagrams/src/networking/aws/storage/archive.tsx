import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARCHIVE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vault;',
  },
  _width: 62,
  _height: 78,
}

export function Archive(props: DiagramNodeProps) {
  return <Shape {...ARCHIVE} {...props} _style={extendStyle(ARCHIVE, props)} />
}
