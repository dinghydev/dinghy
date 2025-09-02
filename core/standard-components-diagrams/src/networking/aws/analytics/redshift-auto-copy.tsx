import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REDSHIFT_AUTO_COPY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.redshift_auto_copy;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function RedshiftAutoCopy(props: DiagramNodeProps) {
  return (
    <Shape
      {...REDSHIFT_AUTO_COPY}
      {...props}
      _style={extendStyle(REDSHIFT_AUTO_COPY, props)}
    />
  )
}
