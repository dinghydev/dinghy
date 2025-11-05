import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EBOOKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/eBooks.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 41,
}

export function Ebooks(props: NodeProps) {
  return <Shape {...EBOOKS} {...props} _style={extendStyle(EBOOKS, props)} />
}
