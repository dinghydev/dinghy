import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_CONTENTS = {
  _style: {
    group:
      'rounded=1;arcSize=10;strokeColor=none;fillColor=#DBDBDB;gradientColor=none;',
    entity: {
      fillColor: '#DBDBDB',
    },
  },
}

export function ServerContents(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_CONTENTS}
      {...props}
      _style={extendStyle(SERVER_CONTENTS, props)}
    />
  )
}
