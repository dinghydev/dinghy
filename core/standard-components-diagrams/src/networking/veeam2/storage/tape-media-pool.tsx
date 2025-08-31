import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_MEDIA_POOL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_media_pool;',
  },
  _width: 28.000000000000004,
  _height: 24,
}

export function TapeMediaPool(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_MEDIA_POOL}
      {...props}
      _style={extendStyle(TAPE_MEDIA_POOL, props)}
    />
  )
}
