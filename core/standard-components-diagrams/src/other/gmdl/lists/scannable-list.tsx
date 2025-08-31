import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCANNABLE_LIST = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function ScannableList(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCANNABLE_LIST}
      {...props}
      _style={extendStyle(SCANNABLE_LIST, props)}
    />
  )
}
