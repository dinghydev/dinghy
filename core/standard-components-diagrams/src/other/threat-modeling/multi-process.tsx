import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_PROCESS = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;aspect=fixed;',
  },
  _width: 60,
  _height: 60,
}

export function MultiProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_PROCESS}
      {...props}
      _style={extendStyle(MULTI_PROCESS, props)}
    />
  )
}
