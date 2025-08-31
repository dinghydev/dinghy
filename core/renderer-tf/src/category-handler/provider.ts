import type { Props } from '@diac/base-components'
import type { ReactElement } from 'react'
import { globalCategory } from './globalCategory.ts'
import type { TfRenderOptions } from '../types.ts'

export const provider = (
  renderOptions: TfRenderOptions,
  category: string,
  tfRoot: Props,
  element: ReactElement,
) => globalCategory(renderOptions, category, tfRoot, element as any)
