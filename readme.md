<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project status
--------------

[![npm](https://img.shields.io/npm/v/react-generic-tools?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/react-generic-tools)
[![npm downloads](https://img.shields.io/npm/dy/react-generic-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/react-generic-tools)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-tools/build.yaml?style=for-the-badge)](https://github.com/thaibault/react-generic-tools/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-tools/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/react-generic-tools/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-tools/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/react-generic-tools/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-tools/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/react-generic-tools/actions/workflows/lint.yaml)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/react-generic-tools/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/react-generic-tools/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/react-generic-tools.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/react-generic-tools)


<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

A collection of small React helpers shared by the author's React libraries:
hooks for stable values and references, an unstyled pagination component,
debugging hooks to find out why a component renders again, a minimal unit
test environment for components and hooks and helpers for end-to-end tests
with [Playwright](https://playwright.dev).
<!--deDE:
    Eine Sammlung kleiner React-Hilfen, die die React-Bibliotheken des Autors
    gemeinsam nutzen: Hooks für stabile Werte und Referenzen, eine
    ungestylte Paginierungskomponente, Debugging-Hooks, um herauszufinden,
    warum eine Komponente erneut rendert, eine minimale
    Unit-Test-Umgebung für Komponenten und Hooks sowie Hilfen für
    End-to-End-Tests mit [Playwright](https://playwright.dev).
-->
<!--frFR:
    Une collection de petits utilitaires React partagés par les bibliothèques
    React de l'auteur: des hooks pour des valeurs et références stables, un
    composant de pagination sans style, des hooks de débogage pour comprendre
    pourquoi un composant se rend à nouveau, un environnement minimal de tests
    unitaires pour composants et hooks ainsi que des aides pour les tests de
    bout en bout avec [Playwright](https://playwright.dev).
-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

Installation
------------

```bash
npm install react-generic-tools clientnode core-js react react-dom
```

The test helpers additionally need "jest" with a "jsdom" test environment,
the end-to-end helpers need "@playwright/test".
<!--deDE:
    Die Testhilfen benötigen zusätzlich "jest" mit einer
    "jsdom"-Testumgebung, die End-to-End-Hilfen "@playwright/test".
-->
<!--frFR:
    Les aides de test nécessitent en plus "jest" avec un environnement de
    test "jsdom", les aides de bout en bout "@playwright/test".
-->

Hooks
-----

- "useMemorizedValue(value, ...dependencies)": Returns the value of the first
  render until one of the dependencies changes. Useful for object or function
  literals which should keep their identity.<!--deDE:"useMemorizedValue(value, ...dependencies)": Gibt den Wert des ersten Renderns zurück, bis sich eine der Abhängigkeiten ändert. Nützlich für Objekt- oder Funktionsliterale, die ihre Identität behalten sollen.--><!--frFR:"useMemorizedValue(value, ...dependencies)": Retourne la valeur du premier rendu jusqu'à ce qu'une des dépendances change. Utile pour les littéraux d'objet ou de fonction qui doivent conserver leur identité.-->
- "useReferenceState(initialValue)": Like "useState", but the setter ignores
  "null". Pass the setter as callback reference to keep the last mounted
  element in state.<!--deDE:"useReferenceState(initialValue)": Wie "useState", aber der Setter ignoriert "null". Übergeben Sie den Setter als Callback-Referenz, um das zuletzt eingehängte Element im State zu halten.--><!--frFR:"useReferenceState(initialValue)": Comme "useState", mais le setter ignore "null". Passez le setter comme référence de rappel pour conserver dans l'état le dernier élément monté.-->

```TypeScript
import {useMemorizedValue, useReferenceState} from 'react-generic-tools'

export const Measured = () => {
    const [element, setElement] =
        useReferenceState<HTMLDivElement | null>(null)
    const style = useMemorizedValue({padding: '1em'})

    return <div ref={setElement} style={style}>
        {element ? `${element.offsetWidth}px wide` : null}
    </div>
}
```

<!--|deDE:Paginierung-->
<!--|frFR:Pagination-->
Pagination
----------

"Pagination" renders a list of page items without any styling. "total" is the
number of entries, "pageSize" the number of entries per page and "page" the
current page. "render" decides what each item shows:
<!--deDE:
    "Pagination" stellt eine Liste von Seiteneinträgen ohne jegliches Styling
    dar. "total" ist die Anzahl der Einträge, "pageSize" die Anzahl der
    Einträge pro Seite und "page" die aktuelle Seite. "render" bestimmt, was
    jeder Eintrag anzeigt:
-->
<!--frFR:
    "Pagination" affiche une liste d'éléments de page sans aucun style.
    "total" est le nombre d'entrées, "pageSize" le nombre d'entrées par page
    et "page" la page courante. "render" détermine ce que chaque élément
    affiche:
-->

```TypeScript
import {Pagination} from 'react-generic-tools'

<Pagination
    page={page}
    pageSize={10}
    render={({disabled, page: target, selected, type}) =>
        type.endsWith('ellipsis') ?
            '…' :
            <button
                disabled={disabled || selected}
                onClick={() => setPage(target as number)}
            >{type === 'page' ? target : type}</button>
    }
    total={entries.length}
/>
```

Further properties are "boundaryCount" and "siblingCount" (number of pages
shown at the ends and around the current page), "showFirstButton",
"showLastButton", "hidePrevButton", "hideNextButton", "disabled" and
"className". Nothing is rendered if everything fits on one page.
<!--deDE:
    Weitere Eigenschaften sind "boundaryCount" und "siblingCount" (Anzahl der
    Seiten an den Enden und um die aktuelle Seite), "showFirstButton",
    "showLastButton", "hidePrevButton", "hideNextButton", "disabled" und
    "className". Passt alles auf eine Seite, wird nichts dargestellt.
-->
<!--frFR:
    Les autres propriétés sont "boundaryCount" et "siblingCount" (nombre de
    pages affichées aux extrémités et autour de la page courante),
    "showFirstButton", "showLastButton", "hidePrevButton", "hideNextButton",
    "disabled" et "className". Rien n'est affiché si tout tient sur une seule
    page.
-->

<!--|deDE:Fehlersuche-->
<!--|frFR:Débogage-->
Debugging
---------

"useLogChanges" logs which parts of a value changed since the last render.
Put it into a component which renders more often than expected:
<!--deDE:
    "useLogChanges" protokolliert, welche Teile eines Werts sich seit dem
    letzten Rendern geändert haben. Setzen Sie es in eine Komponente, die
    häufiger als erwartet rendert:
-->
<!--frFR:
    "useLogChanges" journalise les parties d'une valeur qui ont changé depuis
    le dernier rendu. Placez-le dans un composant qui se rend plus souvent que
    prévu:
-->

```TypeScript
import {useLogChanges} from 'react-generic-tools/debugHelper'

export const Expensive = (properties: Properties) => {
    useLogChanges(properties, 'Expensive properties')
    // ...
}
```

"useOldValue" returns the value of the previous render and "getChanges"
compares two values without React.
<!--deDE:
    "useOldValue" liefert den Wert des vorherigen Renderns, und "getChanges"
    vergleicht zwei Werte ohne React.
-->
<!--frFR:
    "useOldValue" retourne la valeur du rendu précédent et "getChanges"
    compare deux valeurs sans React.
-->

<!--|deDE:Unit-Tests-->
<!--|frFR:Tests unitaires-->
Unit tests
----------

"prepareTestEnvironment" mounts a fresh React root before and removes it
after each test. "render" returns the first rendered DOM node, "runHook" calls
a hook inside a test component:
<!--deDE:
    "prepareTestEnvironment" hängt vor jedem Test eine neue React-Wurzel ein
    und entfernt sie danach. "render" gibt den ersten gerenderten DOM-Knoten
    zurück, "runHook" ruft einen Hook innerhalb einer Testkomponente auf:
-->
<!--frFR:
    "prepareTestEnvironment" monte une nouvelle racine React avant chaque
    test et la retire ensuite. "render" retourne le premier nœud DOM rendu,
    "runHook" appelle un hook dans un composant de test:
-->

```TypeScript
import {afterEach, beforeEach, expect, test} from '@jest/globals'
import {useState} from 'react'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

const {render, runHook} = prepareTestEnvironment(beforeEach, afterEach)

test('renders a button', () => {
    expect(render(<button>Save</button>)?.textContent).toBe('Save')
})

test('runs a hook', () => {
    const {result} = runHook(useState, {parameters: [2]})

    expect(result.value[0]).toBe(2)
})
```

The returned "render" function of "runHook" renders again with new
parameters. With "wrapper" the hook runs inside a provider component.
<!--deDE:
    Die von "runHook" zurückgegebene Funktion "render" rendert erneut mit
    neuen Parametern. Mit "wrapper" läuft der Hook innerhalb einer
    Provider-Komponente.
-->
<!--frFR:
    La fonction "render" retournée par "runHook" effectue un nouveau rendu
    avec de nouveaux paramètres. Avec "wrapper", le hook s'exécute dans un
    composant fournisseur.
-->

<!--|deDE:End-to-End-Tests-->
<!--|frFR:Tests de bout en bout-->
End-to-end tests
----------------

Helpers for Playwright tests in "react-generic-tools/endToEndTestHelper":
<!--deDE:
    Hilfen für Playwright-Tests in "react-generic-tools/endToEndTestHelper":
-->
<!--frFR:
    Aides pour les tests Playwright dans
    "react-generic-tools/endToEndTestHelper":
-->

- "formatEndUserDate(date)" and "formatEndUserTime(date)": Format values the
  way Playwright expects them for date and time inputs.<!--deDE:"formatEndUserDate(date)" und "formatEndUserTime(date)": Formatieren Werte so, wie Playwright sie für Datums- und Zeiteingaben erwartet.--><!--frFR:"formatEndUserDate(date)" et "formatEndUserTime(date)": Formatent les valeurs comme Playwright les attend pour les champs de date et d'heure.-->
- "waitForFinishedLoading(page, spinner)": Waits for network idle and an
  optional loading indicator to disappear.<!--deDE:"waitForFinishedLoading(page, spinner)": Wartet, bis das Netzwerk ruht und ein optionaler Ladeindikator verschwunden ist.--><!--frFR:"waitForFinishedLoading(page, spinner)": Attend que le réseau soit inactif et qu'un éventuel indicateur de chargement disparaisse.-->
- "forwardLogging(page)": Prints the browser console to the test output.<!--deDE:"forwardLogging(page)": Gibt die Browser-Konsole in der Testausgabe aus.--><!--frFR:"forwardLogging(page)": Affiche la console du navigateur dans la sortie des tests.-->
- "isSameLocator(first, second)": Checks whether two locators point to the
  same element.<!--deDE:"isSameLocator(first, second)": Prüft, ob zwei Locator auf dasselbe Element zeigen.--><!--frFR:"isSameLocator(first, second)": Vérifie si deux localisateurs désignent le même élément.-->

```TypeScript
import {expect, test} from '@playwright/test'
import {
    formatEndUserTime, forwardLogging
} from 'react-generic-tools/endToEndTestHelper'

test('sets the start time', async ({page}) => {
    forwardLogging(page)
    await page.goto('/')

    const time = formatEndUserTime(new Date())
    await page.getByLabel('Start').fill(time)

    await expect(page.getByLabel('Start')).toHaveValue(time)
})
```

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn build
yarn check
```
