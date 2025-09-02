import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EBOOKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/eBooks.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function Ebooks(props: DiagramNodeProps) {
  return <Shape {...EBOOKS} {...props} _style={extendStyle(EBOOKS, props)} />
}
