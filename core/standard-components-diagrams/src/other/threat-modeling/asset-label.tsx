import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSET_LABEL = {
  _style:
    'text;html=1;strokeColor=#d6b656;fillColor=#fff2cc;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  _width: 40,
  _height: 20,
}

export function AssetLabel(props: DiagramNodeProps) {
  return <Shape {...ASSET_LABEL} {...props} />
}
