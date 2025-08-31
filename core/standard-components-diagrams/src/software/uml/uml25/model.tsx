import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODEL = {
  _style: {
    entity:
      'shape=folder;fontStyle=1;tabWidth=110;tabHeight=30;tabPosition=left;html=1;boundedLbl=1;folderSymbol=triangle;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 80,
}

export function Model(props: DiagramNodeProps) {
  return <Shape {...MODEL} {...props} _style={extendStyle(MODEL, props)} />
}
