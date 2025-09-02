import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.app_generic',
  },
  _original_width: 50,
  _original_height: 39,
}

export function ApplicationGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_GENERIC}
      {...props}
      _style={extendStyle(APPLICATION_GENERIC, props)}
    />
  )
}
