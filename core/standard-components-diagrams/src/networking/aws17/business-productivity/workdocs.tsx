import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKDOCS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.workdocs;fillColor=#D16A28;gradientColor=#F58435;gradientDirection=north;',
  },
  _original_width: 82.5,
  _original_height: 94.5,
}

export function Workdocs(props: DiagramNodeProps) {
  return (
    <Shape {...WORKDOCS} {...props} _style={extendStyle(WORKDOCS, props)} />
  )
}
