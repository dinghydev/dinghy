import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BITBUCKET = {
  _style:
    'image;html=1;image=img/lib/atlassian/Bitbucket_Logo.svg;strokeColor=none;',
  _width: 57,
  _height: 50,
}

export function Bitbucket(props: DiagramNodeProps) {
  return <Shape {...BITBUCKET} {...props} />
}
