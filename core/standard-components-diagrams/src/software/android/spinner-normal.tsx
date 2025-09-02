import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPINNER_NORMAL = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.spinner2;align=center;fillColor=#999999;strokeColor=#999999;verticalAlign=bottom',
  },
  _original_width: 110,
  _original_height: 10,
}

export function SpinnerNormal(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPINNER_NORMAL}
      {...props}
      _style={extendStyle(SPINNER_NORMAL, props)}
    />
  )
}
