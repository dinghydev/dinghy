import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_CONTENTS = {
  _style: {
    container:
      'rounded=1;arcSize=10;strokeColor=none;fillColor=#DBDBDB;gradientColor=none;',
    entity: {
      fillColor: '#DBDBDB',
    },
  },
}

export function ServerContents(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVER_CONTENTS)} />
}
