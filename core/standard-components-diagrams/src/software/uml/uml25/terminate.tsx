import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINATE = {
  _style: {
    entity: 'shape=umlDestroy;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Terminate(props: DiagramNodeProps) {
  return (
    <Shape {...TERMINATE} {...props} _style={extendStyle(TERMINATE, props)} />
  )
}
