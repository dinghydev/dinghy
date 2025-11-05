import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MODEL = {
  _style: {
    entity:
      'shape=folder;fontStyle=1;tabWidth=110;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;folderSymbol=triangle;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 80,
}

export function Model(props: NodeProps) {
  return <Shape {...MODEL} {...props} _style={extendStyle(MODEL, props)} />
}
